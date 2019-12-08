const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("Hi", "https://www.twitch.tv/Alpha");
});
 
 
 
 
 
 
 
 
 
client.login('token');
