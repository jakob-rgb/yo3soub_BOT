require('dotenv').config();
const { Client,IntentsBitField} = require('discord.js');   
const client = new Client({
     intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

     ]
});
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

const wi = 'where';

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content.includes(wi)) {
        message.reply('fi tirmtik!');
    } else if (content === 'windows') {
        message.reply('linux 5ir y a kibdi !');
    }
});

client.login(process.env.TOKEN);

