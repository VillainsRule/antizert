import Discord from 'discord.js';
import token from './token.js';

export default async (client) => client.on('ready', async () => {
    console.log(`connected to ${client.user.tag}...`);

    const rest = new Discord.REST({ version: '10' }).setToken(token);

    await rest.put(Discord.Routes.applicationCommands(client.user.id), {
        body: [{
            name: 'antizert',
            description: 'display the antizert ad!',
            interaction_types: [0, 1],
            contexts: [0, 1, 2]
        }]
    });

    console.log(`added /antizert command!`);
});