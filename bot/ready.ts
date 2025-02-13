import { Client, REST, Routes } from 'discord.js';
import token from './token.js';

export default async (client: Client) => client.on('ready', async () => {
    if (!client.user) throw new Error('client.user is null!');

    console.log(`connected to ${client.user.tag}...`);

    const rest = new REST({ version: '10' }).setToken(token);

    await rest.put(Routes.applicationCommands(client.user.id), {
        body: [{
            name: 'antizert',
            description: 'display the antizert ad!',
            interaction_types: [0, 1],
            contexts: [0, 1, 2]
        }, {
            name: 'button',
            description: 'display the button ad!',
            interaction_types: [0, 1],
            contexts: [0, 1, 2]
        }]
    });

    console.log(`added commands!`);
});