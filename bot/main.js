import Discord from 'discord.js';

import ready from './ready.js';
import command from './command.js';

import token from './token.js';

const client = new Discord.Client({ intents: [] });

ready(client);
command(client);

client.login(token);