const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load token from .env file

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    for (const guild of client.guilds.cache.values()) {
        try {
            const channels = guild.channels.cache.filter(channel => channel.isTextBased() && channel.permissionsFor(guild.members.me).has('CreateInstantInvite'));
            if (channels.size > 0) {
                const invite = await channels.first().createInvite({ maxAge: 0, maxUses: 0 });
                console.log(`${guild.name}: ${invite.url}`);
            } else {
                console.log(`${guild.name}: No invite permissions`);
            }
        } catch (error) {
            console.error(`Error fetching invite for ${guild.name}:`, error);
        }
    }
});

client.login(process.env.TOKEN);
