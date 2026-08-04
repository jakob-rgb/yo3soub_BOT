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
    console.log('${c.user.tag} is online');


});
client.on('messageCreate', (message) => {
    if(message.content === 'where?' && Math.random() < 0.5){
        message.reply('fi tirmtik!');
    }
    else if(message.content === 'win?' && Math.random() < 0.5){
        message.reply('fi tirmtik!');
    }
    else if(message.content === 'where do we meet?' && Math.random() < 0.5){
        message.reply('fi tirmtik!');
    }
    else if(message.content === 'windows'){
        message.reply('linux 5ir ya kibdi !');
    }
});
client.login(process.env.TOKEN);

