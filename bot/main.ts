import { Client } from 'discord.js';

import ready from './ready.js';
import command from './command.js';

import token from './token.js';

const client = new Client({ intents: [] });

ready(client);
command(client);

client.login(token);