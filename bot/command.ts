import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Client,
    EmbedBuilder,
    InteractionReplyOptions,
    MessageFlags
} from 'discord.js';

export default async (client: Client) => client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand() && interaction.commandName === 'antizert') {
        await interaction.reply({
            flags: MessageFlags.Ephemeral,
            content: '**loading ad...**'
        });

        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setDescription('# tired of 4 page ads?\n## click "DOWNLOAD ANTIZERT" to bypass ALL ADS!\n## no more editing ad code, this does it 4 u!')
                    .setFooter({ text: 'the code is on the "code" tab of greasyfork. don\'t trust it? ask chatgpt to read.' })
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setCustomId('antizert')
                        .setLabel('CLICK TO BLOCK ALL ADS!')
                        .setStyle(ButtonStyle.Danger),
                    new ButtonBuilder()
                        .setCustomId('donttrust')
                        .setLabel(`don't trust it?`)
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setURL('https://github.com/VillainsRule/antizert')
                        .setEmoji('<:github:1339740377909039154>')
                        .setLabel('read code on github')
                        .setStyle(ButtonStyle.Link)
                )
            ]
        })
    }

    if (interaction.isCommand() && interaction.commandName === 'button') {
        await interaction.reply({
            flags: MessageFlags.Ephemeral,
            content: '**loading ad...**'
        });

        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setDescription('**antizert** is a script that **removes the redirects** from zertalious\'s scripts.\nyou can download it now, and no scripts will ever redirect you again.')
                    .setFooter({ text: 'don\'t trust it? ask chatgpt to read the code.' })
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setURL('https://greasyfork.org/scripts/524543')
                        .setEmoji('<:greasyfork:1339740215522234391>')
                        .setLabel('Download from GreasyFork')
                        .setStyle(ButtonStyle.Link),
                    new ButtonBuilder()
                        .setURL('https://github.com/VillainsRule/antizert/blob/main/antizert.user.js')
                        .setEmoji('<:github:1339740377909039154>')
                        .setLabel('Download from GitHub')
                        .setStyle(ButtonStyle.Link)
                )
            ]
        })
    }

    if (interaction.isCommand() && interaction.commandName === 'workingaimbot') {
        await interaction.reply({
            flags: MessageFlags.Ephemeral,
            content: '**loading ad...**'
        });

        await new Promise((r) => setTimeout(r, 3000));

        let msg: InteractionReplyOptions = {
            embeds: [
                new EmbedBuilder()
                    .setDescription('**statefarm client** is a WORKING AIBMOT FOR SHELL SHOCKERS!\nit also has the following features:\n\n- bloom hacks\n- aimbot prediction\n- esp/nametags\n- ammo/grenade esp\n- health displays\n- unbanning\n- a lot more!\n\ndownload using the below buttons!')
                    .setFooter({ text: 'don\'t trust it? ask chatgpt to read the code.' })
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setURL('https://greasyfork.org/scripts/482982')
                        .setEmoji('<:greasyfork:1339740215522234391>')
                        .setLabel('Download via GreasyFork')
                        .setStyle(ButtonStyle.Link)
                ),
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setURL('https://github.com/Hydroflame522/StateFarmClient/blob/main/StateFarmClient.js')
                        .setEmoji('<:github:1339740377909039154>')
                        .setLabel('Download via GitHub')
                        .setStyle(ButtonStyle.Link)
                )
            ]
        };

        // @ts-expect-error discord.js types are broken
        if (interaction.options.getUser('user')) msg.content = `<@${interaction.options.getUser('user').id}>`;

        interaction.followUp(msg);
    }

    if (interaction.isButton()) {
        if (interaction.customId == 'antizert') interaction.reply({
            flags: MessageFlags.Ephemeral,
            embeds: [
                new EmbedBuilder()
                    .setDescription(`# INSTALL INSTRUCTIONS\n## 1. CLICK "DOWNLOAD" BELOW TO OPEN GREASYFORK\n## 2. CLICK "INSTALL" ON THE GREASYFORK PAGE\n## 3. INSTALL ANY SCRIPT MADE BY ZERTALIOUS\n## 4. ADS ARE NOW BLOCKED! ENJOY!`)
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setLabel('DOWNLOAD FROM GREASYFORK')
                        .setURL('https://greasyfork.org/scripts/524543')
                        .setStyle(ButtonStyle.Link),
                    new ButtonBuilder()
                        .setLabel(`don't trust it?`)
                        .setCustomId('donttrust')
                        .setStyle(ButtonStyle.Secondary)
                )
            ]
        });

        if (interaction.customId == 'donttrust') interaction.reply({
            flags: MessageFlags.Ephemeral,
            embeds: [
                new EmbedBuilder()
                    .setDescription(`**antizert** is open-source and unobfuscated/unminified on **github** and **greasyfork**.\nyou can read the code on [github](https://github.com/VillainsRule/antizert/blob/master/antizert.user.js) if you seriously don't trust it.\nif you can't code, ask chatgpt to read it for you.`)
            ]
        })
    }
});