const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');
require('dotenv').config(); // Load token from .env file

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const MESSAGE_CONTENT = "**ATTENTION!!** message_here Add the new bot with this invite link: https://discord.com/oauth2/authorize?client_id=BOT_ID_HERE";
const PRIORITY_CHANNELS = ["main", "general", "chat", "hangout", "lobby", "lounge", "room", "public", "chill", "discussion", "talk", "off-topic"];

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    for (const guild of client.guilds.cache.values()) {
        try {
            const textChannels = guild.channels.cache
                .filter(channel =>
                    channel.isTextBased() && // Ensure it's a text-based channel
                    channel.type === ChannelType.GuildText && // Ensure it's a GuildText channel
                    channel.permissionsFor(guild.members.me).has(PermissionsBitField.Flags.SendMessages) // Check send message permission
                )
                .sort((a, b) => a.position - b.position); // Sort channels by position

            let targetChannel = textChannels.find(channel => PRIORITY_CHANNELS.some(keyword => channel.name.includes(keyword)));
            let status = "FAILED";

            // If no target channel found, send message in the first available channel
            if (!targetChannel && textChannels.size > 0) {
                targetChannel = textChannels.first(); // Ensures the first channel with permission is chosen
                status = "GOOD ENOUGH";
            }

            if (targetChannel) {
                await targetChannel.send(MESSAGE_CONTENT);
                status = status === "GOOD ENOUGH" ? "GOOD ENOUGH" : "SUCCESS";
            }

            console.log(`${guild.name}: ${status}`);
        } catch (error) {
            console.error(`Error sending message in ${guild.name}:`, error);
        }
    }
});

client.login(process.env.TOKEN);
