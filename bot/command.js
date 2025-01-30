import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } from 'discord.js';

export default async (client) => client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.reply({
            flags: MessageFlags.Ephemeral,
            content: '**loading ad...**'
        });

        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setDescription('# tired of 4 page ads?\n## click "DOWNLOAD ANTIZERT" to bypass ALL ADS!\n## no more editing ad code, this does it 4 u!')
                    .setFooter({ text: 'the code is on the "code" tab of greasyfork. don\'t trust it? ask chatgpt to read.'})
            ],
            components: [
                new ActionRowBuilder().addComponents(
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
                        .setLabel('read code on github')
                        .setStyle(ButtonStyle.Link)
                )
            ]
        })
    }

    if (interaction.isButton()) {
        if (interaction.customId == 'antizert') interaction.reply({
            flags: MessageFlags.Ephemeral,
            embeds: [
                new EmbedBuilder()
                    .setDescription(`# INSTALL INSTRUCTIONS\n## 1. CLICK "DOWNLOAD" BELOW TO OPEN GREASYFORK\n## 2. CLICK "INSTALL" ON THE GREASYFORK PAGE\n## 3. INSTALL ANY SCRIPT MADE BY ZERTALIOUS\n## 4. ADS ARE NOW BLOCKED! ENJOY!`)
            ],
            components: [
                new ActionRowBuilder().addComponents(
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