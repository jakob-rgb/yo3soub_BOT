require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online`);
});

const wi = 'where';
const ray = 'win';

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();
  const matchesRareWord = /(^|\s)(where|win)(\s|$)/.test(content);

  if (content.includes('windows')) {
    message.reply('linux 5ir y a kibdi !');
  } else if (content.includes('chkoun')) {
    message.reply('OMKKK!!!!');
  } else if (matchesRareWord && Math.random() < 0.10) {
    message.reply('fi tirmtik!');
  }
});

if (!process.env.TOKEN) {
  console.error('Missing DISCORD_TOKEN in environment variables.');
  process.exit(1);
}

client.login(process.env.TOKEN);

