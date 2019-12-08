const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://abdlahbot.glitch.me/`);
}, 280000);

const Discord = require('discord.js');  //WESO#0001
const client = new Discord.Client();  //WESO#0001
const moment = require('moment');
const zalgo = require('zalgolize');  //WESO#0001
const math = require('math-expression-evaluator');   //WESO#0001 
const figlet = require('figlet');   //WESO#0001
const fs = require('fs');  //WESO#0001
const ms = require('ms');  //WESO#0001
const prefix = '-'

client.on('message', msg => {  //WESO#0001
    if (msg.content === '???') {  //WESO#0001
      msg.reply('** :wink: ?????????? ????????   :sparkling_heart:**');  //WESO#0001
    }
  });

client.on('message', msg => {  //WESO#0001
    if (msg.content === '????') {  //WESO#0001
      msg.reply('**????  ??? ???? ?????**');  //WESO#0001
    }
  });


client.on('message', msg => {  //WESO#0001
    if (msg.content === '????') {  //WESO#0001
      msg.reply('**?????? ?? ???? ?? ????**');  //WESO#0001
    }
  });
  

  client.on('message', msg => {  //WESO#0001
    if (msg.content === '????') {  //WESO#0001
      msg.reply('**??? ??? ?? ????**');  //WESO#0001
    }
  });


  
   client.on('message', msg => {  //WESO#0001
    if (msg.content === '???') {  //WESO#0001
      msg.reply('**??? ??? :heart: **');  //WESO#0001
    }
  });




  
  client.on("message", message => {  //WESO#0001
    if(message.content.startsWith(prefix + 'v2min')) {  //WESO#0001
     let args = message.content.split(" ").slice(1);  //WESO#0001
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` ????? ??? ??????? ????? ??? ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> ??? ???? ????? ???`).then(msg => msg.delete(10000))  //WESO#0001
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000))   //WESO#0001
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  ????? ??? ????? ??????`), 120000)) 
    }
    });

client.on("message", message => {    //WESO#0001
    if(message.content.startsWith(prefix + "emoji")) {   //WESO#0001
        if(message.author.bot) return;  //WESO#0001
        var emojiid =  message.content.split(" ").slice(1).join(" ")   //WESO#0001
        console.log(emojiid) 
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage  //WESO#0001
${prefix}emoji <EmojiID>`); 
        else    
        message.channel.send("This is the emoji that you requested:-",  //WESO#0001
          { 
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]  //WESO#0001
          }) 
        }  
})   



 client.on("message", message => {  //WESO#0001
  if (message.channel.type === "dm") {    //WESO#0001

      message.channel.startTyping();    //WESO#0001
      setTimeout(() => {    //WESO#0001
        message.channel.stopTyping();    //WESO#0001
      }, Math.random() * (1 - 3) + 1 * 1000);  //WESO#0001
   
  }  
});  

const clans = {};  //WESO#0001
const system = {};  //WESO#0001
const level = {};  //WESO#0001
 
 
client.on('message',async message => {  //WESO#0001
  if(message.author.bot) return;  //WESO#0001
  if(message.channel.type === 'dm') return;  //WESO#0001
 
  let args = message.content.split(' ');  //WESO#0001
  let random = Math.floor(Math.random() * 5) + 2;  //WESO#0001
  let author = message.author;
 
  let xpLeft;  //WESO#0001
  let nameClan;  //WESO#0001
  let membersClan = [];  //WESO#0001
  let levelClan = 0;  //WESO#0001
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
 
  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};  //WESO#0001
 
 
  level[author.id].xp += (+random);  //WESO#0001
  if(level[author.id].xp >= 300) {  //WESO#0001
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;  //WESO#0001
    level[author.id] = {  //WESO#0001
      level: level[author.id].level + 1,  //WESO#0001
      xp: xpLeft  //WESO#0001
    };
 
  }
  if(message.content.startsWith(prefix + "clan")) {  //WESO#0001
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;  //WESO#0001
 
    if(!args[1] || args[1] && args[1] === 'info') {  //WESO#0001
  let embed = new Discord.RichEmbed()
  .setAuthor('????????', message.author.avatarURL)  //WESO#0001
  .setDescription(`- \`${prefix}clan\`: ???? ???????? ?? ???? ??? ???? ???? ??????? ?????? ?????? ??????? ???? ???? ????
  - \`${prefix}clan info\`: ?????? ????? ??????? ( ??? ??????? ) ?
  - \`${prefix}clan create\`: ?????? ???? ?????? ???? ?????
  - \`${prefix}clan invite\`: ????? ??? ?? ?????? ????
  - \`${prefix}clan join\`: ??????? ??? ???? ?????? ???? ?????
  - \`${prefix}clan promote\`: ?????? ??? ??????? ??????? ?????? ( ????? ?????? ?????? ) ?
  - \`${prefix}clan demote\`: ?????? ?????? ?????? ?? ??? ??????? ( ???? ?????? ??? ) ?
  - \`${prefix}clan ownership\`: ???? ???????????
  - \`${prefix}clan leave\`: ?????? ?? ?????? ???? ??? ??
  - \`${prefix}clan kick\`: ???? ??? ?? ?????? ( ????? ?????? ?????? ) ?
  - \`${prefix}clan disband\`: ???? ?????? ?? ?????? ( ???? ?????? ??? ) ?
  - \`${prefix}clan stats\`: ???? ??????? ?????? ????
  - \`${prefix}clan list\`: ???? ?? ????? ?????? ??????
  - \`${prefix}clan accept\`: ????? ??? ???? ????? ???? ?????? ( ????? ?????? ?????? ) ?
  - \`${prefix}clan decline\`: ???? ??? ??? ??? ????? ???? ?????? ( ???? ?????? ?????? ) ?
  - \`${prefix}clan room\`: ???? ??? ??? ?? ????? ???? ?????? ( ???? ?????? ??? ) ?`)
  .setFooter(message.author.username, message.author.avatarURL);  //WESO#0001
  message.channel.send(embed);
}
 
    if(args[1] && args[1] === 'create') {  //WESO#0001
      if(level[author.id].level < 10) return message.channel.send('**# ??? ?? ???? ???? 10 ??????? ???? ???? , ?????? ??????? ????? ?????? ????? ???? ??????**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# ??? ???? ?? ???? ?? ?????? ???? ??? ?? ?????**');
 
      let m = await message.channel.send('**# ???? ??? ?????? ????**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# ?? ????? ??? ??? ?????? ???? ???25 ???? , ??? ???? ?????**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, ?? ????? ??? ??? ?????? ???? ??????**");
        collected.first().delete().catch();
        nameClan = collected.first().content;  //WESO#0001
      });
 
      m = await m.edit('**# ???? ??? ??????**');  //WESO#0001
      awaited = await setTimeout(async() => {  //WESO#0001
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;  //WESO#0001
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),  //WESO#0001
          level: levelClan,
          creator: message.author.id,  //WESO#0001
          members: members,  //WESO#0001
          applylist: [],  //WESO#0001
          admins: []  //WESO#0001  //WESO#0001
        };
 
        system[author.id] = {  //WESO#0001
          clan: nameClan,  //WESO#0001
          joinedAt: new Date().toLocaleString(),  //WESO#0001
          clanLevel: 0,  //WESO#0001
          creator: message.author.id  //WESO#0001
        };
 
        m = await m.edit('**# ?? ??? ?????? ?????**');  //WESO#0001
      }, 2300);
 
    }
    if(args[1] && args[1] === 'invite') {  //WESO#0001
      if(!system[author.id]) return message.channel.send("**# ??? ??? ?????**");  //WESO#0001
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# ??? ??? ?????**');  //WESO#0001
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# ??? ???? ?? ???? ????? ???????**');
      let mention = message.mentions.users.first();  //WESO#0001
      if(!mention) return message.channel.send('**# ???? ??? ?????? ??????**');  //WESO#0001
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# ??? ????? ??????? ??????**");  //WESO#0001
      if(clans[clan].members.length === 10) return message.channel.send("**# ??? ?????? ??? ???? ?????? ?? ??????? ?????**");  //WESO#0001
   //WESO#0001  //WESO#0001  //WESO#0001  //WESO#0001  //WESO#0001
      let m = await message.channel.send(`**${mention} # \`${clan}\`, ?? ????? ????? ??????**\n\n - ????? ?????? \`???\`\n - ???? ?????? \`??\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();  //WESO#0001
        if(collected.first().content === '???') {  //WESO#0001
          clans[clan].members.push(mention.id);  //WESO#0001
 
          system[author.id].members += 1;  //WESO#0001
 
 
          system[mention.id] = {  //WESO#0001
            clan: clan,
            joinedAt: new Date().toLocaleString(),  //WESO#0001
            clanLevel: 0,
            creator: clans[clan].creator  //WESO#0001
          };
 
          message.channel.send(`**${message.author} # ?? ???? ??????**`);  //WESO#0001
        }  //WESO#0001
        if(collected.first().content === '??') {  //WESO#0001
          message.channel.send(`**${message.author} # ?? ??? ??????**`);  //WESO#0001
        } else if(collected.first().content !== '???' && collected.first().content !== '??'){  //WESO#0001
          return message.channel.send('**# ??? ???? ????? `???` ?? `??`**');  //WESO#0001
        }  //WESO#0001
      });  //WESO#0001
    }  //WESO#0001
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# ??? ?? ???? ????? ???????? ??? ?????**');  //WESO#0001
      let clan = system[author.id].clan;  //WESO#0001
      let embed = new Discord.RichEmbed()  //WESO#0001
        .setAuthor(`${message.author.username} || ????????`, message.author.avatarURL)  //WESO#0001
        .setDescription(`?????? || \`${clan.toString()}\``)  //WESO#0001
        embed.addField('» ??? ??????', clan, true)  //WESO#0001
        embed.addField('» ????? ??? ??????', clans[clan].createdAt, true);  //WESO#0001
        embed.addField('» ????? ???? ??????', system[author.id].joinedAt, true)  //WESO#0001
        embed.addField('» ???? ??????', `<@${clans[clan].creator}>`, true);  //WESO#0001
        embed.addField('» ??? ??????', clans[clan].level, true);  //WESO#0001
        embed.addField('» ??? ????? ??????', clans[clan].members.length, true);  //WESO#0001
        embed.addField('» ??? ????????? ??????', clans[clan].applylist.length, true);  //WESO#0001
        embed.addField('» ??? ???????? ???????', clans[clan].admins.length, true);  //WESO#0001
        embed.addField('» ????? ??????', `${prefix}clan list || ?????? ????? ??? ????? ??????`);  //WESO#0001
      message.channel.send(embed);  //WESO#0001
 
    }
    if(args[1] && args[1] === 'join') {  //WESO#0001  //WESO#0001
    let clanName = message.content.split(' ').slice(2).join(" ");  //WESO#0001
    if(system[author.id].clan !== 'None') return message.channel.send("**# ??? ?? ?? ???? ?????**");  //WESO#0001
    if(!args[2]) return message.channel.send("**# ??? ???? ????? ??? ??????**");  //WESO#0001
    if(!clans[clanName]) return message.channel.send("**# ??? ?????? ??? ?????**");  //WESO#0001
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# ??? ???? ??? ???? ??? ?????? ?????");  //WESO#0001
   //WESO#0001  //WESO#0001  //WESO#0001
    clans[clanName].applylist.push(message.author.id);  //WESO#0001
    message.channel.send("**# ??? ?? ??????? ??? ???? ?????? , ???? ???? ???? ?? ??? ??? ????? ??????**");  //WESO#0001
 
  }
    if(args[1] && args[1] === 'accept') {  //WESO#0001
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ???? ?? ???? ????? ???????? ??? ?????**");  //WESO#0001
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ???? ?? ???? ????? ??????? ???????? ??? ?????**");
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ???????? ??? ?????**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
 
      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# ??? ????? ?? ??? ???????? ??? ???? ??????**");
 
      clans[system[author.id].clan].applylist.shift(mention.id);  //WESO#0001
      clans[system[author.id].clan].members.push(mention.id);  //WESO#0001
      let clan = system[author.id].clan;  //WESO#0001
 
 
      system[mention.id] = {  //WESO#0001
        clan: clan,
        joinedAt: new Date().toLocaleString(),  //WESO#0001
        clanLevel: 0,
        creator: clans[clan].creator  //WESO#0001
      };  //WESO#0001
   //WESO#0001
 
      mention.send(`**# \`${system[author.id].clan}\`, ??? ?? ????? ???????**`).catch();  //WESO#0001
      message.channel.send(`**# \`${mention.username}\`, ??? ?? ???? ????? ?????? ??????**`);  //WESO#0001
    }  //WESO#0001
    if(args[1] && args[1] === 'decline') {  //WESO#0001
      let mention = message.mentions.users.first();  //WESO#0001
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ???? ?? ???? ????? ???????? ??? ?????**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ???? ?? ???? ????? ??????? ???????? ??? ?????**");
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ???????? ??? ?????**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# ??? ????? ?? ??? ???????? ??? ???? ??????**");
 
      clans[system[author.id].clan].applylist.shift(mention.id);
 
      system[mention.id] = {  //WESO#0001
        clan: clans[system[author.id].clan],  //WESO#0001
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0  //WESO#0001
      };
 
 
      mention.send(`**# \`${system[author.id].clan}\`, ??? ?? ??? ????? ??????**`).catch();  //WESO#0001
      message.channel.send(`**# \`${mention.username}\`, ??? ?? ??? ???? ????? ??????**`);  //WESO#0001
   //WESO#0001
    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ???? ?? ???? ???? ?? ???? ??????? ?????? ??? ???????**");
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ??????? ??????? ???????**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(system[mention.id].clan === 'None') return message.channel.send("**# ??? ????? ??? ?????**");  //WESO#0001
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# ??? ????? ??? ???????**");  //WESO#0001
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# ??? ????? ???? ???? ??????**");  //WESO#0001
      if(mention.id === message.author.id) return message.channel.send("**# ?? ????? ????? ???? ?????**");  //WESO#0001
 
      clans[system[author.id].clan].admins.push(mention.id);  //WESO#0001
 
 
      mention.send(`**# \`${system[author.id].clan}\`, ??? ?? ?????? ??? ????**`).catch();  //WESO#0001
      message.channel.send(`**# \`${mention.username}\`, ??? ?? ????? ????? ??? ???? ????**`);  //WESO#0001
    }  //WESO#0001
    if(args[1] && args[1] === 'demote') {  //WESO#0001
      let mention = message.mentions.users.first();  //WESO#0001
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");  //WESO#0001
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ????? ????? ?????? ???**");  //WESO#0001
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ??????? ??????? ???????**");  //WESO#0001
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
   //WESO#0001
      if(system[mention.id].clan === 'None') return message.channel.send("**# ??? ????? ??? ?????**");  //WESO#0001
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# ??? ????? ??? ???????**");  //WESO#0001
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# ??? ????? ??? ???? ???????**");  //WESO#0001
      if(mention.id === message.author.id) return message.channel.send("**# ?? ????? ????? ???? ?????**");  //WESO#0001
   //WESO#0001
      clans[system[author.id].clan].admins.shift(mention.id);  //WESO#0001
 
      mention.send(`**# \`${system[author.id].clan}\`, ??? ?? ?????? ?? ???? ??????**`).catch();
      message.channel.send(`**# \`${mention.username}\`, ??? ?? ????? ???????? ?? ?????**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ????? ???? ????? ?????? ???**");
      if(!args[2]) return message.channel.send("**# ??? ???? ????? ??? ??????**");
 
      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, ?? ??? ????? ?? ????? ??? ?????? \n\n - ??????? \`???\`\n - ????? \`??\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === '???') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;
 
          system[author.id].clan = newName;
 
 
            message.channel.send("**# ???? ????? ?????**");
            message.channel.send("**# ?? ????? ??? ?????? ?????**");
 
        } else if(collected.content === '??') {
          message.channel.send(`**# \`${newName}\`, ?? ????? ????? ??? ??????**`);
 
        } else if(collected.first().content !== '???' && collected.first().content !== '??'){
          return message.channel.send('**# ??? ???? ????? `???` ?? `??`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ???? ?? ???? ????? ???????? ??? ?????**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;
 
      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      let m = await message.channel.send("**# ?? ??? ????? ??? ???? ?????? ?? ?????? \n\n - ??????? \`???\`\n - ??????? \`??\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === '???') {
          clans[system[author.id].clan].members.shift(author.id);
 
          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
          message.channel.send("**# ??? ????? ??????**");
        } else if(collected.content === '??') {
          message.channel.send("**# ?? ????? ?????? ?? ??????**");
        } else if(collected.content !== '???' && collected.content === '??') {
          message.channel.send('**# ??? ???? ????? `???` ?? `??`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ???? ?? ???? ???? ?? ???? ??????? ???????? ??? ?????**");
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ??????? ?????**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(system[mention.id].clan === 'None') return message.channel.send("**# ??? ????? ??? ?????**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# ??? ????? ??? ???????**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ????? ???? ????**");
      if(mention.id === message.author.id) return message.channel.send("**# ?? ????? ??? ????**");
 
        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
 
        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
        message.channel.send(`**# \`${mention.username}\`, ?? ??? ????? ?? ??????**`);
        mention.send(`**# \`${system[author.id].clan}\`, ??? ?? ???? ?? ??????**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      if(!mention) return message.channel.send("**# ??? ???? ????? ??? ??????? ??????**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ?? ???? ???? ?????? ???????? ??? ?????**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# ??? ????? ??? ???????**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;
 
      message.author.send(`- \`${number}\`, ???? ??? ????? ?????? ?????????`).catch(e => {
        return message.channel.send(`**# ??? ???? ??? ???? ???????? ??? ?????**`);
      });
 
      let m = await message.channel.send("**# ?? ????? ??? ??????? ?????? .. ??? ???? ????? ????? ?????? ?????????**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();
 
        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;
 
 
          m.delete();
          message.channel.send(`**# \`${mention.username}\`, ?? ????? ???? ?????? ?????**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ?? ???? ???? ?????? ???????? ??? ?????**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;
 
      message.author.send(`- \`${number}\`, ???? ??? ????? ?????? ?????????`).catch(e => {
        return message.channel.send(`**# ??? ???? ??? ???? ???????? ??? ?????**`);
      });
 
      let m = await message.channel.send("**# ?? ????? ??? ??????? ?????? .. ??? ???? ????? ????? ?????? ?????????**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();
 
        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = hero.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, ?? ????? ??????`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, ?? ????? ??????`);
 
              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              clans[system[author.id].clan] = undefined;
 
            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, ?? ???????`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# ??? ?? ???? ????? ???????? ??? ?????**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# ??? ?? ???? ???? ?????? ???????? ??? ?????**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# ?????? ???? ??? ??????**");
      let id = '487721170687229977';
      let m = await message.channel.send("**# ???? ??? ????? ????\n\n - `?????`\n - `????`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === '?????') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });
 
            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });
 
              newArray.shift();
            }
          });
          m.edit('**# ?? ??? ?????**');
        } else if(collected.content === '????') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });
 
            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });
 
              newArray.shift();
            }
          });
          m.edit('**# ?? ??? ?????**');
        }
      });
    }
  }
});

client.on('message', message => {
    if (message.content == "-???") {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"10000000000+2=?",
"232+21=?",
"12+23=?",                 
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10000000002",
  "253",
  "35",
                  
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ??? ??? ??? ??? : __**${x[x3]}**_
???? 15 ????? ???????`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? 
            ??????? ???????? ?? __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ??? ??? ??? ??? ?? ????? ???????  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "-???") {
        var x = ["9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['81',
        "72",
        "16",
        "42",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  ??? ??? ??? ??? :  __**${x[x3]}**__
???? 15 ????? ??? ???`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? 
            ??????? ???????? ?? __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}??? ??? ?????? ??  ?? ????? ???????  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "-???") {
        var x = ["4326-2345=?",
"5822-8547=?",
"543-823=?",
"1500-500=?",
"4322-2768=?",
"5652-1255=?",
"3421-11234=?",
"34545-1233=?",
"23456-54332=?",
"2312-3433=?",
"4321-321=?",
];
        var x2 = ['1981',
        "-2725",
        "-280",
        "1000",
"1554",
"4397",
"-7813",
"33312",
"-30876",
"1121",
"4000",

        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  ??? ??? ???? ?? ?? :  __**${x[x3]}**__
???? 15 ????? ?????? ?? ????`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? 
            ??????? ???????? ?? __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}??? ??? ?????? ?? ?? ????? ???????  `);
        })
        })
    }
})

const pics = JSON.parse(fs.readFileSync('./pics.json' , 'utf8'));
 client.on('message', message => {
         if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find('name', `${room}`)
  if(message.content.startsWith(prefix + "setMedia")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!room) return message.channel.send('Please Type The Channel Name')
      if(!findroom) return message.channel.send('Cant Find This Channel')
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The MediaOnly Code Has Been Setup**')
      .addField('Channel:', `${room}`)
      .addField('Requested By', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      message.channel.sendEmbed(embed)
      pics[message.guild.id] = {
      channel: room,
      onoff: 'On'
      },
      fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
      if (err) console.error(err)
      
      })
    }})
       client.on('message', message => {
  
  if(message.content.startsWith(prefix + "toggleMedia")) {
          if (!message.channel.guild) return;

      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**The MediaCode Is __????__ !**`), pics[message.guild.id].onoff = 'On']
        if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**The MediaCode Is __??????__ !**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
          if (err) console.error(err)
          
          })
        }
        
      })
      
             client.on('message', message => {
                       if (!message.channel.guild) return;
  if(message.author.bot) return;
  
        if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return;

  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;

   let types = [
    'jpg',
    'jpeg',
    'png',
    'http://prntscr.com/'
  ]
   if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This Channel For Media ??? Only !`) 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}
   if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This Channel For Media ??? Only !`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
      .catch(err => {
        console.error(err);
    });
    }
  }
 })
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoMedia")) {
let embed = new Discord.RichEmbed()
.addField('Channel Status', `${pics[message.guild.id].onoff}`)
.addField('Media Channel', `${pics[message.guild.id].channel}`)
.addField('Requested By', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
  }})

 const kingmas = [
    '*** ???? ?????? ??? ??? ??????. ***',
 '*** ???? ??? ??? ? ??? ??? ??? ????? :heart:. ***',
    '***     ??? ??? ???????  ? ???? ???  ??? ????.***',
    '*** ???? ??? ???? ???? ?? ????? ?????.***',
    '*** ??? ?? ??? ????? ??? ???????.***',
    '*** ???? ?? ????? ?? ??? ????? ??? ??????? ?? ?????. ***',
    '*** ???? ??? ??? ?? ??????  ?????? , ? ???? ???? ???? ??? ???? ??? ???? ???????.***',
    '*** ???? ?? ??? ???? ?? ??? ????? ??? ???? ???? ???? ? ??? ???? ??? ????.***',
    '***  ???? ??? ??? ???? ?? ????. ***',
    '***??? ??? ?? ??? ?????? ? ??? ?? ??? ???? ? ???.***',
    '*** ???? ??? ???? ??????? ??? ?? ??? ???? ???? ????. ***',
    '*** ??? ??? ?? ???? ???? ?? ?????? ?? ? ???? ?? ??? ????? ??? ???????  ???? ?????? 3 ?????. ***',
    '*** ??? ??? ??? ???? ???? ?? ???? ???? ???? ??? ???? ??? ????? ????? ??? ?? ????? ?? ???. ***',
    '*** ?? ????? ?? ?? ??????.***',
    '*** ???? ????? ??? ????? ???? ? ??? ????? ??? ?????? ? ????? ?? ????? ?????.***',
    '*** ???? ??? ???? ? ??? ?? ??? ??? ?? ??? ? ???? ?? ????..... ***',
    '*** ???? ??????? ????????? ???? ??? ???? ??? ?????.***',
    '***?? ???? ?????? ?? ????? ?????.***',
    '*** ??? ???? ??? ? ???? ??? ??????? ???? ??? ??? ??? ?????? ???? ??? ?? ??? ???? ??? ?????. ***',
    '*** ??? ???? ??? ? ???? ??? ??????? ???? ??? ??? ??? ?????? ???? ??? ?? ??? ???? ??? ?????.***',
    '*** ?????? ???? ????? ???? ?? :slight_smile:. ***',
    '*** ???? ??? ???? ??????? ??? ?? ??? ???? ???? ????.***',
    '*** ???? ??? ???????  ? ???? ??? ???? ???. ***',
    '*** ??? ??? ??? + ????? ??? ????? ??? ?? ??? ?? ?????? ??? ???.  ***'
 ]
  client.on('message', message => {
    var prefix = '-';
  if (message.content.startsWith(prefix + '???')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("???? ??? ..")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });

client.on('message', PuP => {
  let args = PuP.content.split(" ").slice(1).join(" ")
  if (PuP.content.startsWith(`${prefix}sr`)) {
                if (!PuP.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return PuP.channel.send('`**???? ????? ??? ?????? ??????**`');
                PuP.guild.owner.send(`**? ????? ??? ?????? ??? ${args}
                ?????? : <@${PuP.author.id}>**`)
                PuP.guild.setName(args)
                PuP.channel.send(`**?? ???? ??? ??????? ??? : __${args}__ **`);
                
       }

       });



client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' -help',`Im on ${client.guilds.size} servers`,`i help ${client.users.size} Members`,' BAD Is The Best ','Just Do It'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/blu4egam3r`);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('+[-----------------------------------------------------------------]+')
  console.log(`[Start] ${new Date()}`);
  console.log('+[-----------------------------------------------------------------]+')
  console.log('')
  console.log('+[------------------------------------]+');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('+[------------------------------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log(' Bot Is Online')
  console.log('+[------------]+')
  console.log('')
  console.log('')
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});

client.on('message',async Epic => {
  var prefix = "-" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});


client.on('message', message => {
var prefix = "-";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + '?? ????')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});



client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("**My Prefix Is** : `-`")
    }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



if(cmd === `#{prefix}8ball`){


if(!args[1]) return message.reply("Please ask a full question!");
let replies = ["Yes", "No.", "I don't know.", "Ask again later plez."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed ()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);
}
});

const Love = [  "**???? / ??? ????? ???????? ?????? ?????? ????? ??????? ??? ?????? ?????? ?? ???? ?????**.",  "**?????? ??????? ???? ???? ???? ???? ????? ???????**.",  "**???? ???... ???????? ?? ?????? ????? ????? ???? ???????**.",  "**???? ???? ??????? ???? ?? ???? ???? ?? ???? ???? ?? ????**.",  "**? ?? ???? ??? ??????? ?? ????? ........... ? ??? ???? ???????? ????**.",   "**???? / ???????? ???? ???? ?????? ????? ??? ???? ???????? ?????????**.",   "**??????? ???? ????? ... ?????? ???? ??? ??? ??? ?????? ???? ...?????? ???? ????**.",   "**???? ?????? ???..???? ?? ?? ?????? ...???? ????? ????? ... ???? ????? ????**.",   "**?? ??? ???? ???? ????? ???? ???? ????? ?? ??? ????...??? ??? ????? ?????**.",   "**??? ???? ????? ??? ????? ???? ????? ??? ???? ??? ??? ?????**.",   "**???? ?? ???? ?????? ???? ?? ??? ????? ??????**.",   "**????? ?? ???? ???? ???? ?????? ????? ??? ???? ????? ??? ?????**.",   "**??????? ??? ?????? ?? ????? ??????? ??? ?????? ???????? ?? ?????**.",   "**?? ????? ?? ???? ??????? ???? .. ??? ?? ????? ?? ???? ????? ???? ???? !**.",   "**???? ???? ???? ???? .. ???? ???? .. ???? ???? .. ?? ???? ????? ???? ????**.",   "**???? ???? ???? ???? ???? ?? ???? ????? ??? ??? ???? ???? ???? ??? ????**.", ]


 client.on('message', message => {
   if (message.content.startsWith("P.love")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
     .setFooter(`PuP System`)
   .setThumbnail(message.author.avatarURL) 
 .addField('??' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
        let roleembed = new Discord.RichEmbed()
    .setDescription(`
    ????? ??? ??????? :
    -role @mention rolename : ?????? ???? ???? ????
    -role all rolename : ?????? ???? ??????
    -role humans rolename : ?????? ???? ??????? ???
    -role bots rolename : ?????? ???? ????? ???????`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__??? ???? ???????__**');
      if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed)
          if( !args[1] ) return message.channel.sendEmbed(roleembed)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: ???? ??? ?????? ?????? ??????? ??? ?????**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] ???? [ '+args[0]+' ] ?? ????? ??? **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ??? ???? ????**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ??? ??????? ????**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ??? ???????? ????**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: ???? ??? ????? ?????? ??????? ??????**' );
          if( !args[1] ) return message.reply( '**:x: ???? ??? ?????? ?????? ??????? ?????**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: ???? ??? ?????? ?????? ??????? ?????**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] ???? [ '+args[0]+' ] ?? ????? **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ???? ????**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ??????? ????**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] ?? ????? ???????? ????**');
          }
      }
  });



client.on("message", (message) => {
     
   if (message.content.startsWith("-new")) {
        const reason = message.content.split(" ").slice(1).join(" ");      
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);     
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });     
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '-confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })     
                   .then((collected) => {
                       message.channel.delete();
                   })     
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "tAntihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**? The AntiHack Is __????__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**? The AntiHack Is __??????__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        
 
  let banse = new Set();
  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));
  client.on('guildBanAdd', function(guild) {
    guild.fetchAuditLogs().then(logs => {
      const ser = logs.entries.first().executor;
      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
        bans: 2
      }
      if(antihack[guild.guild.id].onoff === 'Off') return;
      let boner = bane[ser.id+guild.id]
  banse.add(ser.id)
  boner.bans = Math.floor(boner.bans+1)
 
 
  setTimeout(() => {
    boner.bans = 2
    banse.delete(ser.id)
  },8000)
 
  if(boner.bans > 2) {
    let roles = guild.members.get(ser.id).roles.array()
  guild.members.get(ser.id).removeRoles(roles)
  }
 
      })
      fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
  if (err) console.error(err);
  })
 
  })
  client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_KICK`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {  
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
    const data = require("./data.json");
  });
  client.on('roleDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {    
                  r.edit({
                      permissions : []  
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
    const data = require("./data.json");
  });
  client.on('channelDelete', (u) => {   
      u.guild.fetchAuditLogs().then( s => {  
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_DELETE`) {  
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {  
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {  
                  data[ss.executor.id].time = 0
              }
          })
      };
      });  
    const data = require("./data.json");
  })

client.on('message', message => {
    if (message.content.startsWith("-link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.?? ????? ?????? ?????? ????**")

message.author.send(`**??? ?????? : ????
??? ????????? ?????? : 100**`)


    }
});



client.on('message', message=>{  
    if(message.author.bot) return;  
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) {  
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**????? ??? `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log")  
    if(log) return message.reply("**???? ?????? ??? ?????**")   
    if(!log) {   
    message.guild.createChannel("log", "text").then(c=> {  
        c.overwritePermissions(message.guild.id, {  
            SEND_MESSAGES: false
    })
})
message.channel.send("**? ,?? ????? ??? ????? ???????**")
    }
    }  
     })
client.on('error', console.error);
 
client.on('messageDelete', message => {  
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;  
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;  
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;  
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');  
    if(!logChannel) return;  
 
    let messageDelete = new Discord.RichEmbed()  
    .setTitle('**[MESSAGE DELETE]**')  
    .setColor('RED')  
    .setThumbnail(message.author.avatarURL)  
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()  
    .setFooter(message.guild.name, message.guild.iconURL)  
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {  
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;  
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 

client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)  
   
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {  
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()  
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);  
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
   
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);  
        }
        if(oldRole.hexColor !== newRole.hexColor) {  
            if(oldRole.hexColor === '#000000') {  
                var oldColor = '`Default`';  
            }else {
                var oldColor = oldRole.hexColor;
            }    
            if(newRole.hexColor === '#000000') {  
                var newColor = '`Default`';  
            }else {
                var newColor = newRole.hexColor;  
            }  
            let roleUpdateColor = new Discord.RichEmbed()  
            .setTitle('**[ROLE COLOR UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')  
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()  
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
   
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {  
            let roleUpdate = new Discord.RichEmbed()  
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) 
        }
    })
});
 
 

client.on('channelCreate', channel => { 
  
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        let channelCreate = new Discord.RichEmbed() 
        .setTitle('**[CHANNEL CREATE]**') 
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); 
client.on('channelDelete', channel => { 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; 
 
    if(channel.type === 'text') { 
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) 
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); 
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;

        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() 
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) 
 
            logChannel.send(newName); 
        }
        if(oldChannel.topic !== newChannel.topic) { 
            let newTopic = new Discord.RichEmbed() 
            .setTitle('**[CHANNEL EDIT]**') 
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 

client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return; 
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; 
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => { 
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`???? ??????\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`???? ??????\`\`'; 
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') 
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return;
  
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') 
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => { 
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return; 
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)  
  .setTimestamp() 
  .setFooter(member.user.tag, member.user.avatarURL)
  
  logChannel.send(leaveMember);
});
 
 

client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 

        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }

        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }

        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }

        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() 
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); 
        }
    })

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave); 
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }  
}); 



client.on("message", msg => {
  if(msg.content === '-' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("??| ??? ?????? :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("??| ???? ?? :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('??| ?????? :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('??| ?????? :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('??| ????? : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('??| ?? ???????? ????????? ?? :', `${msg.createdAt}`,true)
          .addField('??| ?? ?? ??? ?', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});

client.on('message', message => {
    if (message.content.startsWith("-hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("**```???? ??? ????? ??? ??? ?????```**");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦ ] 20%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 30%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 40%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 50%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 70%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 85%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ??? ????? ').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ????? ????' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ???? ?????? ????? 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ???? ?????? ????? 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ???? ?????? ????? 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ???? ?????? ????? 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ???? ?????? ????? 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('** ! ??? ????? ??????? ????? **')
           }, 33000)
           });
         }
})




client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '-'; 
    
    if(args[0] === `-{prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});




client.on('message' , message => {
  var prefix = "-"
  
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  
  
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  
  
  client.users.get("337647196235366401").send(
      "\n" + "**" + "? ??????? :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ? ?????? : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ? ??????? : " + "**" +
      "\n" + "**" + args + "**")
  
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription('?? ?? ????? ??????? ??? ???? ????? ?????')
       .setThumbnail(message.author.avatarURL)
       .setFooter("ScriptBot | System")
                                                  
  
  message.channel.send(embed);
  
  
  }
      
  });










client.on('message', message => { 
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ???? ???? ???????:rose: 
:crown:??? ?????  ${member}:crown:  
??? ????? ??? ${member.guild.memberCount} `) 
}).catch(console.error)
})

	client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('? | ??? ???????')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** ??? ??? ??????? ?????? ??????? ?? ???? ??? ????? ????? ??? ??????? ????  **` , `**??????  : ?? ??? ??? ??????? ?? ???? ????? ?????? ?????? ??????? ?? ???????**`)
        .addField(`by`,`LegendSystem. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});



client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__??? ???? ???????__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__?? ????? ?????__ ? **")
              });
                }

    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__??? ???? ???????__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__?? ??? ?????__?**")
              });
    }
       
});

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('Info WESO.Bot.')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ - ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
    })
}
});

client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "savatar"){
          const embed = new Discord.RichEmbed()
  
      .setTitle(`ServerAvatar${message.guild.name} **  `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? ??? ??? ??? ????? ????????? ??? **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  ?? ???? ???? ?????? ???? ?????**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "???? ??? ?????",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith("???")) {
                  if(!message.channel.guild) return message.reply('**? ??? ??? ??? ????? ????????? ??? **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  ?? ???? ???? ?????? ???? ?????**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "???? ??? ?????",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });





client.on('message', message => {
    if(message.content == '-members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**????? ?????????
:green_heart: ???????   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:?????       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: ????      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: ???????   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   ????  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

client.on('message',message =>   {
  if(message.channel.type == 'dm') return;
  if(message.content.startsWith(prefix + "talk")) {
      var attentions = {};
      attentions[message.guild.id] = { };
      message.channel.send( message.author + ', **Wait , PuP System**').then( (m) =>{
      m.edit( message.author + ', **???? ???? ?????**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 600000 } ).then ( (m1) => {
      m1 = m1.first();
      attentions[message.guild.id]['id'] = m1.content;
      m1.delete();
m1 = message.guild.channels.get(`${attentions[message.guild.id]['id']}`)
if(!m1) return message.reply(`**?????? ??? ??? ???? \`${attentions[message.guild.id]['id']}\`**`);
 
      m.edit(message.author+"**???? ??????? ?????? ??????? ?????**")
      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 600000 }).then ( (m2) => {
      m2 = m2.first();
      attentions[message.guild.id]['msg'] = m2.content;
      m2.delete();
      m.delete();
      message.channel.send(`**?? ???? ????? ?? ??? <#${attentions[message.guild.id]['id']}>
${attentions[message.guild.id]['msg']}**`).then(msge => {
      msge.react('?').then( r => {
      msge.react('?')
      const oneFilterBB = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
      const threeFilterBB = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
      const oneBY = msge.createReactionCollector(oneFilterBB, {maxMatches : 1,time : 400000,});
      const threeBY = msge.createReactionCollector(threeFilterBB, {maxMatches : 1,time : 400000,});
      oneBY.on('collect', r => {
      msge.delete();
      message.guild.channels.get(`${attentions[message.guild.id]['id']}`).send(`${attentions[message.guild.id]['msg']}`)
      }).catch(RebeL =>{ console.log('`Error`: ' + RebeL)});
          threeBY.on('collect', r => {
      msge.delete();
      })
      })
  })
      });
      });
      });
     
    }
    });




client.on('message', function(msg) {
  if(msg.content.startsWith ('-server')) {
    if(!msg.channel.guild) return msg.reply('**:x: ??? ??? ??? ????? ??????? ???**');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **??? ??????? : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** ???? ??????? :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** ????? :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** ??? ??????? :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** ??? ??????? ????????? :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** ??????? ???????? :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** ????? ????? :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** ???? ??????? :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ???? ??????? :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** ?? ??? ??????? ?? : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

 const cuttweet = [
     '?? ???? ?| ????? ?? ??? ????? ??? ???? ????? ?????? ???? ??????',
     '?? ???? | ???? ??? ?????? ????? ??????',
     '?? ???? | ?????? ?? ... ?',
     '?? ???? | ???? ??????? ??????? ?? ???????',
     '?? ???? ?| ???? ????????',
     '?? ???? ?| ?? ????? ???? ????????',
     '?? ???? | ???? ???? ????? ?? ??? ??? ???? ????? ???',
     '?? ???? ?| ????? ?????? ???????? ?? ?????',
     '?? ???? | ??? ?? ???? ??? ????? ?',
     '?? ???? ?| ??? ???? ????? ??????? ???? ??? ?????',
     '??? ???? | ???? ??? ????? ?? ??? ?????? ?',
     '?? ???? | ???? ???? ????? ???? ???????',
     '??? ???? | ?? ?? ????? ???? ????? ???? ???????',
     '??? ???? | ?? ???? ????????',
     '??? ???? | ??? ?????? ?? ???? ?',
     '??? ???? | ?? ??? ???? ??? ?????.',
     '??? ???? | ??? ?????? ?? ??????? ???????? ?',
     '??? ???? | ???? ???? ?????? ??? ???? ???',
     '??? ???? | ???? ???? ?? ????? ?? ?????? ?!',
     '??? ???? |???? ???? ??? ???? ?',
     '??? ???? | ????? ????? ??? ???? ????? ??? ???? ????? ?',
     '?? ???? | ?? ??? ????? ?? ??? ???? ??????',
     '??? ???? | ???? ????? ??????? ???????',
     '??? ???? | ????? ?? ????? ??? ???? ???? ????? ?',
     '??? ???? | ?? ????? ???? ???? ????? ?',
     '??? ???? | ????? ?????? ????? ?',
     '??? ???? | ?? ??? ????? ???? ?????? ??? ?????? ????? ???????',
]
 
 client.on('message', message => {
   if (message.content.startsWith("-cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('???? ?? ????' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for servers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**???????? ?? ??? ? ????**`);
    if(sabotage === client.user) return message.reply(`** ??? ?????? ? **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('?? ???? ?????? ??? ??? ??????? ?? ??????? ??? ??????');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("_?????-?? ${sabotage")
  .then(msg =>{
  msg.edit(`_?????-?? ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`_?????-?? ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`_?????-?? ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`_?????-?? :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`_?????-?? :fire:`);
  }, 4000);
  setTimeout(function() {
    msg.edit(`_?????-?? :skull:`);
  }, 5000);
  msg.delete(6000)
  message.delete()
  })
  message.channel.send("**?? ????? ??????? ????? ?? **").then(msg => msg.delete(7000));
    }
});


const Sra7a = [
     '?????  |  ???? ?????',
     '?????  |  ?????? ????? ?? ???????',
     '?????  |  ??? ???? ???? ???????',
     '?????  |  ??? ??? ???? ??????',
     '?????  |  ?? ???? ?? ????? ??? ????? ???? ?? ???? ??? ??????',
     '?????  |  ??? ??? ?? ????? ???? ???? ?????? ???',
     '?????  |  ???? ??????? ??? ????? ?? ???? ???? ?? ??????',
     '?????  |  ????? ????? ?? ?? ???? ?????',
     '?????  |  ??? ???? ??? ?? ?? ????? ?? ????? ??? ????? ?? ????? ?????',
     '?????  |  ???? ??? ??? ?? ??????',
     '?????  |  ????? ???? ???? ??? ?? ???? ?????? ?????" ??????',
     '?????  |  ??? ????? ?? ?? ?????? ???? ????? ??? ???? ?? ????? ?? ?????',
     '?????  |  ??????? ?????? ????? ???? ????? ???? ?????',
     '?????  |  ??????? ?????? ???? ?? ??? ?????',
     '?????  |  ???? ? ???? ????????',
     '?????  |  ????? ??? ???? ???? ??? ??????? ?? ???? ??? ?????',
     '?????  |  ??? ??? ??????? ????????',
     '?????  |  ??? ??? ????? ??? ?????? ?????? ?? ??? ??? ????',
     '?????  |  ???? ????? ???? ????? ??? ???? ???? ????',
     '?????  |  ?? ????? ????? ???? ?????',
     '?????  |  ???? ?????? ?????',
     '?????  |  ?????? ??? ?? ????? ? ????',
     '?????  |  ?? ??? ??? ???? ??????',
     '?????  |  ???? ????? ?????? ?? ????',
     '?????  |  ?????? ?????? ???? ??? ??? ??? ??? " ?????',
     '?????  |  ??? ????? ?? ?????',
     '?????  |  ?????? ??? ?????? ??? ?????? " ? ?????',
     '?????  |  ???? ?????? ????? ?????',
     '?????  |  ?????? ??? ??? ??????',
     '?????  |  ???? ??? ????? ???????',
     '?????  |  ?? ???? ???? ??????',
     '?????  |  ?? ????? ??? ???? ??????',
     '?????  |  ????? ????? ??? ???? ??????',
     '?????  |  ?? ???? ?? ???? ?????',
     '?????  |  ?? ????? ????? ?? ???????',
     '?????  |  ??? ??? ??? ?????',
     '?????  |  ???? ??? ? ?? ?????',
     '?????  |  ?? ????? ?? ??? ????',
     '?????  |  ?????? ??????? ?????????? ???????',
     '?????  |  ???? ??? ?????? ?? ????',
     '?????  |  **?? ????? ???? ?? ???? ???????',
     '?????  |  ?? ??? ??????? ??? ???????? ????? ??? ?? ?????',
     '?????  |  ??? ??? ??? ??? ???? ?????? ????? ?????? ?? ??????',
     '?????  |  ?? ?? ???? ??? ????? ???????',
     '?????? | ?? ???? ??? ???? ?? ??? ?',
     '?????  |  ?? ?? ?????? ???? ???? ?? ????? ?????',
     '?????? | ?? ??? ?????? ?? ???????',
     '??????  |  ?? ?? ????? ???? ???? ?? ???? ??? ???? – ?????? ??????- ?????? ?????? – ??? ???? ???? ?????',
     '??????  |  ?? ???? ?? ???? ?? ????',
     '??????  |  ?? ?? ? ?????  ???? ?? ?????? ?? ??????',
     '??????  |  ?? ?? ????? ???? ???? ?? ?? ?????',
     '??????  |  ?? ????? ??? ???? ????? ???? ???? ???????',
	  '??????  |  ?? ??? ??????? ???? ?? ?????',
     '??????  |  ???? ????? ????? ?? ??????',
     '??????  | ?? ????? ????? ?? ??????',
     '?????  |  ?? ?? ???? ??? ????? ???????',
     '??????  |  ?? ?? ???? ????????',
     '??????  |  ?? ???? ?? ???? ?????',
	 '?????  |  ?? ?? ??????? ?????????????',
	 '????? | ???? ?? ??? ?',
	 '????? | ?? ??? ???? ?? ????? ?? ??? ?',
	 '????? | ?? ???? ??? ?? ??? ?? ????? ?? ?? ?',
	 '????? | ?? ?? ?????? ???????? ???? ????? ???? ????????',
	 '????? | ?? ??? ?????? ?',
	 '????? | ?? ???? ???? ????? ?? ???? ?',
	 '????? | ?? ??? ?????? ?',
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('-sara7a')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("???? ????? ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('??| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "????") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```?? ??? ??????? ???? ???? ????? ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n??? ??????? ???? ?? ?????: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

var Za7f = [
  "**???? ???? ?? ???? ?? ???? ?? ???**.",
  "**???? ?? ??? ????? ??? ???????**.",
  "**??? ???? ? ??? ???? ?? ?????? ??????? ??? ???**.",
  "**??? ??? ?? ???? ???? ?? ?????? ?? ? ???? ?? ??? ????? ??? ???????  ???? ?????? 3 ?????**.",
  "**??? ???? ??? ? ???? ??? ??????? ???? ??? ??? ??? ?????? ???? ??? ?? ??? ???? ??? ?????**.",
  "**????? ???? ? ?? ?? ????? ?? ?????? ??????? ??? ???**.",
  "**?? ????? ?? ?? ??????**.",
  "**???? ????? ??? ????? ???? ? ??? ????? ??? ?????? ? ????? ?? ????? ?????**.",
  "**??? ?? ??? ????? ??? ???????**.",
  "**???? ??? ???? ? ??? ?? ??? ??? ?? ??? ? ???? ?? ????....**.",
  "**??? ???? ? ??? ???? ?? ?????? ??????? ??? ???**.",
  "**?? ???? ?????? ?? ????? ?????**.",
  "**???? ?? ??? ???? ?? ??? ????? ??? ???? ???? ???? ? ??? ???? ??? ????**.",
  "**?? ????? ?? ?? ??????**.",
  "**???? ?? ??? 5 ???? ?????**.",
  "**???? ????? ??? ????? ???? ? ??? ????? ??? ?????? ? ????? ?? ????? ?????**.",
  "**??? ??? ?? ??? ?????? ? ??? ?? ??? ???? ? ???**.",
  "**???? ?? ????? ?? ??? ????? ??? ??????? ?? ?????**.",
  "**??? ???? ??? ? ???? ??? ??????? ???? ??? ??? ??? ?????? ???? ??? ?? ??? ???? ??? ?????**.",
  "**?????? ???? ????? ???? ?? :slight_smile:**.",
  "**???? ??? ??? ?? ??????  ?????? , ? ???? ???? ???? ??? ???? ??? ???? ???????**.",
  "**??? ???? ??? ??? ?? ?????? ??????? ??? ???**.",
  "**???? ??? ??? ? ??? ??? ??? ????? :heart:**.",
  "**?? ???? ???? ?? ?????? :slight_smile:**.",
  "**?? ????? ??????? ???? ??**.",
  "**???? ?????? ??? ??? ??????**.",
  "**???? ????? ? ??? ?? ??? ???? ???? ? ???....**.",
  "**??? ?????? ? ???? ??? ?? ???**.",
  "**???? ?? ??? ???? ?? ??? ????? ??? ???? ???? ???? ? ??? ???? ??? ????**.",
  "**??? ??? ??? ????? ?? ????? ???? ????**.",
  "**???? ?????? ?????????? ???? ??? ???? ??? ????? ???? ????? ??? ?? ????? ???? ???? ????**.",
  "**?? ????? ??? ???? ???? ??? ???? ??? ????? ? ??? ????? ???? ???? ???? ??? ???? ?? ????????**.",
  "**??? ????? **.",
  "**???? ??????? ????????? ???? ??? ???? ??? ?????**.",
  "**???? ??? ??? ?? ??????  ?????? , ? ???? ???? ???? ??? ???? ??? ???? ???????**.",
  "**??? ???? ????? ??? ??**.",
  "**?? ???? ?????? ?? ?? ??? ????? ??? ???????**.",
  "**?????? ???? ????? ???? ?? :slight_smile:**.",
  "**???? ??? ???? ? ??? ?? ??? ??? ?? ??? ? ???? ?? ????....**.",
  "**??? ??? ??? + ????? ??? ????? ??? ?? ??? ?? ?????? ??? ???**.",
  "**???? ??????**.",
  "**??? ??? ??? ????? ???? ???**.",
  "**???? ?? ??? ????? ??? ?? ??? ????? ?? ??? ????**.",
  "**??? ??? ??? ???? ???? ?? ???? ???? ???? ??? ???? ??? ????? ????? ??? ?? ????? ?? ???**.",
  "**???? ??? ???? ??????? ??? ?? ??? ???? ???? ????**.",
  "**???? ??? ???????  ? ???? ??? ???? ???**.",
  "** ???? ??? ???????  ? ???? ??? ????? ?? ??**.",
  "**??????? ??? ???????  ? ???? ???  ??? ????**.",
    "**???? ??? ???? ???? ?? ????? ?????**.",
    "**???? ??????**.",
    "** ???? ?? ?????? ???  ??????**.",
    "** ???? ??? ??? ???? ?? ????**.",

];

client.on('message', message => {
    if (message.content === "-rooms") {
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('rooms:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **??? ?? ???? ???? ????? ??????? ??? ???????**');
    message.channel.send(`:eight_pointed_black_star:| **???? ??? ??? ?????????**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **?? ???? ??? ????????**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **??? ?? ???? ???? ?????**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **?? ?? ????????**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With ?? To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **?? ??? ????????** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !??',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** ?? GIVEAWAY ENDED ??**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! ??? ???? ???????? \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **???? ??? ????????? ???????**`);
                 console.log(e);
               }
             });
           });
         });
       });
     });
   });
 }
});


 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
if (command == "za5") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :');
  message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**????? ?? ?????? ????? ??? ??????**`)
      guild.owner.send(embed)
});

const devs = ["516473846983950336","533944821228896257"]
 
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : ?? ???? ???? ?????`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
 
  });

client.on('message', message => {
 if (message.content.startsWith("-????")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('WESO.Bot' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});


const zead = [
   '*** ??? ???? ???? ***',
   '*** ?????? ???? ???? ? ***',
   `*** ???? ?? ! ??? ????? ?? ??? ??????  ***`,
   '*** ?? ??? ??????? ? ***',
   '*** ????? ?? ??? ???? ????? ? ***',
   '*** ???? ???? ???? ??? ?? ???? ???? ???? ????? ?????? ***',
   '*** ????? ??? ???? ???? ????? ***',
	 '*** ?? ??? ???? ??? ????? ? ***',
   '*** ?? ??? ??????? ? ***',
   '*** ??? ????? ??? ????? ???? ! ***',
   '*** ???? ??? ?? ????? ??? ??? ?????? ?? ??? ***',
   '*** ????? ????? ?? ????? ?? ??? ??? ?? ??? ***',
   '*** ??? ??? ??? ???? ? ???? ?? ???? ***',
   '*** ??? ???? ***',
   '*** ??? ?? ????? ???? ???? ?? ?????? ***',
   '*** ?? ????? ???? ????? ?? ????? ***',
   '*** ????? !  ***',
   '*** ??? ????? ??? ?????? ????? ????? ??????? ????? ???? ???? ***',
   '*** ?? ??? ???? ? ***',
   '*** ??? ????? ????? ??? ??? ??????? ?????? ***',
   '*** ?? ??? ?? ????? ???? ***',
'*** ??? ??? ????? ?????? ??? ????? ***',
   '*** ??? ??? ????? ?????***',
   '*** ????? ??? ?? ????? ????? ? ***',
   '*** ??? ???? ???? ????? ??? ????? ?? ?????? ***',
   '*** ???? ?? ??? ???? ???? ???? ???????? ***',
   '*** ???? ?? ????? ?????? ?? ??? ????? ??? ***',
   '*** ????? ?? ???? ?????? ? ***',
   '*** ??????????????????? ??? ???? ????? ?? ??? ?????? ***',
   '*** ?? ???? ??? ???? ?? ??? ???? ***',
   '*** ??????? ??? ! ???? .????  ***',
   '*** ????? ???? , ?? ???? ???? ? ***',
   '*** ?? ?? ???? ???? , ???? .???? ??? ???? ***',
   '*** ????? ???? . ?? ???? ???? ? ***',
   '*** ??? ???? ?? ????? ????? ??? ?? ???? ***',
   '*** ??? ???? ?? ???? ??? ?????? ***',
   '*** ?? ???? ?? ??? ! ***',
   '*** ???? : ??? ??? ***',
   '*** ???? : ?? ???? ??????? ??? ??? ***',
   '*** ???? : ???? ??? ??? ?? ?????? ***',
   '*** ???? : ???? ???? ?? ???? ***',
   '*** ??? ?? ??? ?? ?????? ***',
   '*** ????? ????? ?????? ????? ???? ????? 100 ????? , ?????? ?? ??? ????? ????? ??? ???????  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('$????')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("???? ???? ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', message => {
    if (message.content == "-quas") {
         message.react('??','??')
        var x = ['??? ???? ????? ?????', '?? ?? ??? ???? ?????????', '?? ?? ??? ???? ???????', '?? ?? ???? ????? ????? ?', '?? ?? ??? ??? ??????', '?? ?? ??? ??? ??? ??????? ??????? ?? ???????? ??? 1926?' , '?? ?? ??? ???? ???? ?? ???','?? ?? ???? ??? ?? ????','?? ?? ???? ???? ??? ?????','?? ?? ??????? ???? ????? ??????','?? ?? ??? ???? ??? ????????','??? ??? ??? ???????? ??? 6?? ?? 3?? ?? 2???','??? ???? ?????? ???? ???? ??????','??? ???? ???? ?????','?? ?? ?????? ???? ???? ????? ????? " ?? ???? ????? ??? ???? ??? ??? ???????? ?????????? ?? ???? ??? ????? ????? ".????','?? ?? ?????? ???? ???? ????? ???? ??????','???? ???? ?? ?????? ???????','???? ??? ???? ??????? ???? ??????','???? ???? ???????? ??????? ?????????','???? ???? ?????????','?? ?? ????? ??????','?????? "?????" ????','???? ???? ???? ??? ?????','?? ?? ???? ?????? ?? ????? ????????','?? ??? ??????? ?? ?????? ???????','?? ?? ??? ??? ?????? ?? ??? 1966','??? ????? ??? ???? ?? ???????','????? ???? ???????','?? ???? ???? ????? ??????','?? ?? ????? ??????','??? ???? ???? ??? ???? ?? ???????'
        ];
        var x2 = ['???????', '???? ??', '??? ?????', '???????', '??', '????? ????????', '???? ???? ?? ?????','?????????','?????','?????','???? ????','6','??? 1962','??? 7??','???????','???? ??????','???','????????','????? ??????','???????','??????','????? ??????','??????','71%','15 ????','??????? ','???????','??????','15 ????? ???? ?????','????','????'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`?? ????? ????? ??? ??????? , ?????? ???? :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ??? ??? ?????? ?????? ??????  `);
            message.react('?')
        })
        })
    }
});

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("??? ?? ???? ??????? !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("????? ?????? ??????? ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** ?? ???? ???? ?????? 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** ??? ???? ?????? ????? **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  ????????**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  ?? ?????? **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  ?????**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} ??? ????? ????? ????? ???? ?????? ????????
${message.author.tag} ??? ??????? ??????
[ ${reason} ] : ?????
??? ???? ??????? ?? ???? ????? ???? ?? ????????
`)
		.setFooter(`?? ????? : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**??? ???? ?????? ??? ?? ????? ????**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**?? ???? ?????**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**???? ?????? ?????**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**?? ??? ????? ??? ??? ???? ?? ??????**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**??? ?? ?? ?????? ?? ??? ?????**:white_check_mark:");

  return;

  }

});

 
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if(!reason) return message.reply ("**???? ??? ?????**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**???????? ??? ??? ???? ?? ????? ???? ????? ????? ???? ????**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**??? ?? ???? ????????? ????????**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**??? ?? ???? ???? ????? ???? ?? ???? ????? ?????? ??????**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

client.on('message', message => {
            var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});



client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
         
        }
});

const perfix = '$';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**???? ????? ????**`)
      if (!args[1]) return msg.reply(`**?? ?? ??????? ??????? ???????**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**??? ????? ?????**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**????? ????? ?? ?? ??? ??**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**?? ????? ???????**`)
    }
});

var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
.setColor(0xd3d0c4)
   .setFooter(`WESO.Bot`)
message.channel.sendEmbed(cat);

    }
});

client.on('message' , message => {
    ;
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`?? ???? ???? ????`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`??? ?? ?? ?????? ?? ????? \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**?Unban** !')
        .addField('**?User Unban :** ', `${user}` , true)
        .addField('**?By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



  
  client.on('message', message => {
       if (message.content.startsWith(prefix + 'bs')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** ??? ???????: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}??????? `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});
  
client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send(`${user}? ??????? , ????? ???? ???? ? ??? ?????`)
          .then(msg => {
              msg.delete(10000)
          })
      }
  })


   
   client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
   
   client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });
   
   client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( ???? ?? ????)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('??? ???????? ??? ?? ??? ????????')
    .then(async (new_message) => {
      await new_message.react('1?');
      await new_message.react('2?');
      await new_message.react('3?');
      await new_message.react('4?');
      await new_message.react('5?');
      await new_message.react('6?');
      await new_message.react('7?');
      await new_message.react('8?');
      await new_message.react('9?');
      await new_message.react('??');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`???? ?? ?? ???? ????`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });
   
   client.on('message', msg => {
	var  prefix = "-";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});
   
   client.on('message', omar => {
var prefix = "-";
if(omar.content.split(' ')[0] == prefix + 'dc') {  
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'dr') { 
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("? `Success Deleted All Roles - Ranks`")
}
});
   

   client.on('message',async message => {
	
  if(message.content.startsWith(prefix + "?????")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "?????????");
 
  if(!submite) return message.channel.send("??? ??? ????? ????? ??????????");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('?? **| ?? ???? ???? ???? ????... ? **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('?? **| ?? ?????? ?????????... ? **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('?? **| ?? ??? ????? ???? ???? ?????? ????? ???????... ? **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('?? **| [ ?? ??? ????? ?? ??????? | [ ??? ] ?? [ ??**');
 
 message.channel.awaitMessages(response => response.content === '???' || '??' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === '??') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === '???') {
 
          if(thisFalse === false) return;
 
          msg.edit('?? **| Done ?, ?? ????? ??? ????? ?? ??? ?????????**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite?**
 
[**??? ??????**]:
${thisMessage}
 
[**???????? ?????????**]:
${boi}
 
[**??? ?????? ??????**]:
${boi2}
 
[**?? ??????? ??????**]:
${message.author}
 
[**???? ??????**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
   
   client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });
   
   client.on('message', message => {
    if (message.content.startsWith(prefix + 'ranks')) {
 
        const Rank = message.guild.roles.map(e => e.toString()).join(" ");
 
        const RankList = new Discord.RichEmbed()
            .setTitle('? Roles.')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(Rank)
            .setFooter(message.guild.name)
        message.channel.send(RankList)
    }
});
   
client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`? You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("?")
 }}});
  
  
  
  client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "gRole")) {
    if(!args) return message.reply('???? ??? ??????');
    if(!role) return message.reply('??? ?????? ??? ??????');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- ??? ??????',role.name,true)
    .addField('- ?? ?? ??????',role.id,true)
    .addField('- ?? ????? ??????',role.createdAt.toLocaleString(),true)
    .addField('- ??? ??????',role.hexColor,true)
    .addField('- ??? ??????? ???? ????? ??? ??????',role.members.size,true)
    .addField('- ???? ?????? ??? ?? ?????',role.position - message.guild.roles.size,true)
    .addField('- ????? ??????',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
}); 
   
client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('Write Some Things');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});
   
 

client.on("message", message => {
    if (message.content.startsWith("-obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  ??? ????????? `);
  message.delete();
  };
  });




client.on('message',  (message) => {
        if(message.content.startsWith('-kiss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  var kiss = [
    'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
    'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
    'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif',
	'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
	'https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
	'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
	'https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif',
	'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
	'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
	'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
	'https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif',
	'https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif',
	'https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif',
	'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
	'https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif',
	'https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif',
	'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
	'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
	'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
	'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
	'https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif',
	'https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif',
	'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
    'https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username}???? ???? ??? ???? ${user.username}!`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});



client.on('message', message => {    
            if (message.content.startsWith(prefix + "cto")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("???? ???? ????? ?? ???????!")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`?? ????? ??????? ?? **${a}**`))
      .catch(console.error);
            }
        });




  client.on("message", function(message) {
    var prefix = "-";
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Puplic | ????","??",true)
    .addField("Admin | ??????","??",true)
    .addField("Games | ?????","??",true)
        .addField("BotRooms | ????? ?????","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('??')
        msg.react("??")
        msg.react("??")
                msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 18000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
      :busts_in_silhouette:***__????? ????__***:loudspeaker: 
**
?-ping ====> ?????? ???? ????? ?????
?-link ====> ?????? ???? ???? ??? ???? ??????????? 100
?-tag ====> ???? ?????? ???? ???? ? ????
?-?????
?-quran ====> ???? 200 ???? ?? ?????? ??????
?-perms ====> ???? ????????
?-topinv ====> ???? ???? ???? ????? 
?-hypixel ====> ????? ????????? ?? ???????
?-contact ====> ??????? ?? ???? ?????
?-clan ====> ???? ????????
?-report ====> ??????? ?? ???
?-Minv ====> ?????? ??? ??????
?-color ====> ???? ??? ??
?-emojilist ====> ????? ????? ??????? ???????
?-date ====> ?????? ????? ?????
?-email ====> ????? ????? ? ??? ??????
?-gRole Role name ====> ????? ??????? ???? ?????? ?? ?????? ????
?-bot ====> ???? ?? ?? ??????? ?????
?-say ====> ???? ?????? ??? ?????
?-savatar ====> ???? ???????
?-id ====> ??????? ???
?-new ====> ???? ?? ???
?-avatar ====> ????? ?? ???? ??? ??????
?-embed ====> ???? ??? ????? ???? ???
?-rules ====> ???? ?? ?????? ???????
?-v2min ====> ???? ??? ???? ????
?-inv ====> ????? ????? ??? ??????
**
`)
   message.author.sendEmbed(embed)
      message.reply('?? ?????? ?????')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png')
      .setColor("#000000")
      .setDescription(`
      :key:***__????? ??????__***:crown: 
**
?-bc ====> ????? ????? ????? ???????
?-bk ====> ????? ????? ????? ??????? 2
?-rolebc ====> ????? ????? ?????
?-setbot ====> ???? ??? ???? ???? ??????? ?? ???????
?-bans ====> ??????? ???????? ?? ??????
?-setmember ====> ???? ??? ???? ???? ????? ???????
?-cto ====> ???? ?????? ?? ???? ?????
?-leave ====> ???? ????? ?? ??????
?-setMedia ====> ?????? ??? ?????
?-ranks ====> ????? ??? ???????
?-vonline ====> ???? ??? ???? ???????
?-schannel ====> ????? ????? ???????
?-sr Exemple ====> ?????? ??? ???????
?-kv ====> ???? ??? ?? ??? ????
?-hchannel ====> ????? ?????
?-talk ====> ?????? ???? ?????
?-count ====> ??? ????? ???????
?-setlog ====> ???? ??? ?????
?-server ====> ???? ?? ??????? ?? ???????
?-movall ====> ???? ?????? ??? ????
?-sug ====> suggestions ???? ?????? ???? ??? 
?-bs ====> ?????? ??????? ?????
?-rooms ====> ????? ????? ???????
?-dc ====> ??? ?? ???????
?-dr ====>  ??? ?? ????????
?-allbots ====> ????? ?? ??????? ?? ??????
?-move ====> ???? ??? ??? ??? ?????
?-giveaway ====> ???? ??????
?-role @mention rolename ====> ?????? ???? ???? ????
?-role all rolename ====> ?????? ???? ??????
?-role humans rolename ====> ?????? ???? ??????? ???
?-role bots rolename ====> ?????? ???? ????? ???????
?-members ====> ????? ????? ???????
?-send ====> ????? ????? ???? ??????
?-clr <numbr> ====> ??? ????? ????
?-clear ====> ??? ?????
?-mute @user <reason> ====> ????? ????? ???? ???? ???? <Muted>
?-unmute @user ====> ??? ?????? ?? ????? 
?-kick @user <reason> ====> ??? ????? ?? ???????
?-ban @user <reason> ====> ??? ????? ?? ???????
?-unban @user ====> ??? ??? ????? ?? ???????
?-mutechannel ====> ????? ?????
?-unmutechannel ====> ??? ?????
?-ct <name> ====> ????? ???
?-cv <name> ====> ????? ???? ????
**
`)
   message.author.sendEmbed(embed)
      message.reply('?? ?????? ?????')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
      .setColor("#000000")
      .setDescription(`
       :video_game: ***__????? ?????__***:game_die:
 **       
?-8ball ====> ???? ???? ????? ????  ??? ????? ????
?-cuttweet ====> ???? ?? ????
?-?? ????
?-cal ====> ??? ?????
?-za5 ====> ?????? ?? ????
?-cats ====> ??? ????
?-love ====> ????? ????? ?? ???? 
?-???
?-???
?-???
?-???
?-?????
?-???
?-sara7a ====> ???? ?????
?-roll ====> ????
?-xo ====> xo ???? 
?-??? ????? ====> ???
?-kiss ====> ?? ????? ??? ?????
?-marry ====> ???? ??????
?-hack ====> ???? ???
?-kill ====> ???? ???
?-quas ====> ????? ????
?-???? ???? ====> ????
?-?????
?-????? ?????? ????? ====> ????
`)
   message.author.sendEmbed(embed)
   message.reply('?? ?????? ?????')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
            -=- ??????? ??????? ????? -=-
?=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.?
????? ????? ???????? ???????
Weclom ??? ???????
suggestions ??? ??????????
'??? '????????? 
??? ??????? leave
?=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.?
`)
   message.author.sendEmbed(embed)
})
    })
}
});

client.on('message', message => {
    if (message.content == "-???") {
        var x = ["????",
"?????",
"???",
"????",
"??? ????",
"?????",
"??????",
"??? ???? ???? ????",
"?????",
"?????",
];
        var x2 = ['? ? ? ?',
        "? ? ? ? ?",
        "? ? ? ",
        "? ? ? ?",
"? ? ? ? ? ? ?",
"? ? ? ? ?",
"? ? ? ? ? ?",
"? ? ? ? ? ? ? ? ? ? ? ? ? ? ?",
"? ? ? ? ?",
"? ? ? ? ?",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  ???
 :  __**${x[x3]}**__
???? 20 ?????`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? 
            ??????? ???????? ?? __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}??? ??? ?????? ???? ?? ??? ?????`);
        })
        })
    }
})

client.on('message', message => {
if(message.content.startsWith("-?????")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => {
    if (message.content == "-?????"){
        var x = ["?? ????? **??????**",
    "?? ????? **?????????**",
    "?? ????? **??????? **",
    "?? ????? **?????????",
    "?? ????? ** ???**",
    "?? ????? ** ????????**",
    "?? ????? ** ????????**",
    "?? ????? **???  **",
    "?? ????? **????????  **",
    "?? ????? **?????  **",
    "?? ????? **?????  **",
    "?? ????? **??????  **",
    "?? ????? **?????  **",
    "?? ????? **??????  **",
    "?? ????? **??????  **",
   "?? ????? **????  **",
   "?? ????? **????????  **",
];
        var x2 = ['??????',
        "????",
        "???????",
      "????? ????",
"???????",
"??????",
"????????",
"??????",
      "??????",
      "????",
      "?????",
    "?????",
      "?????",
    "?????",
  "?????",
    "??????",
  "????????",
  
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ??? ??? ???? ????? ?? :  __**${x[x3]}**__
???? 20 ????? ?????? ????? ?????`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ??? ????? ????? ??? ??? ??? ???????? ???? ???? 
            ??????? ???????? ?? __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}??? ??? ?????? ????? ?? ?? ????? ???????  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ??   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ????? ??? ??????? :angry: ! **`)
    }
}
});

    client.on('message',async message => {
    if(message.content.startsWith(prefix + "setbot")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **?? ????? ??????**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **?? ????? ??????**');
    message.channel.send('?| **?? ??? ????? ?????**');
    message.guild.createChannel(`Bots : : [ ${message.guild.members.filter(m=>m.user.bot).size} ]` , 'voice').then(c => {
      console.log(`Done make room in: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(() => {
        c.setName(`Bots : [ ${message.guild.members.filter(m=>m.user.bot).size} ]`)
      },1000);
    });
    }
  });

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


 client.on('message', message => {
var prefix = "-";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + '???')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

      client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("??? ????? ???")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });

  client.on('message', message => {
    if (message.content.startsWith("-bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ??? ????? ??????? ?? ??????? `))
  .catch(console.error);
}
});




client.on('message', message => {
  var prefix ="-";
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});
 
    }
});


 client.on("message", async message => {
            if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'Minv')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `??? ??? ????? **${nul}** ???`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `?? ??? ????? ?? ??? ???? ???????`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **??? ??? ?????? ???? ????? ??????? ???? ??? ???????? ?? ?????**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


 client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('-bc')) {
if(!message.channel.guild) return message.channel.send('**??? ????? ??? ?????????**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**????? ?? ????? ??????** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "ScrpitBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**??? ???? ????? ???? ?? ???? ?????? ??????????**');message.channel.send(`**?? ??? ????? ?? ?????? ??????????? \n????? ??????????:** \` ${args}\``).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bk')) {
if(!message.channel.guild) return message.channel.send('**??? ????? ??? ?????????**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**????? ?? ????? ??????** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`????? ??????? ${args}`)
.setDescription(`???????? ?? ???? ??\n???????? ???? ????? \n???? ????? ???????? ??? ????? ??????????`)
if (!args) return message.reply('**??? ???? ????? ???? ?? ????? ?????? ??????????**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: ?? ????? ??????? ?????`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: ?? ????? ??????? ?????`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("?? ?????? ??????? | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("?? ???? ???? ???? ?????")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "??????? :" + "\n" +
              `${message.guild.name}` + "\n" +
              "?????? :" + "\n" +
              `${message.author.tag}` + "\n" +
              "??????? :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`??? ?? ????? ??? ??????? ??? ${message.guild.members.filter(m => m.roles.get(role.id)).size} ???`)
        }
    });

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message',async message => {
    if(message.content.startsWith(prefix + "setmember")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **?? ????? ??????**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **?? ????? ??????**');
    message.channel.send('?| **?? ??? ????? ?????**');
    message.guild.createChannel(`Members : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Done make room in: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(() => {
        c.setName(`Members : [ ${message.guild.members.size} ]`)
      },1000);
    });
    }
  });

client.on('message', message => {
if(message.content === prefix + 'quran') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;

	message.delete();

	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`??????? ?????? | ???? ??? ${page} ?? ??? ${pages.length} ????`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png')
	.setImage(pages[page-1])


	message.channel.sendEmbed(embed).then(msg => {

		msg.react('?').then( r => {
			msg.react('?')
		.then(() => msg.react('?'))
		.then(() => msg.react('?'))
		.then(() => msg.react('?'))

			let backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

			let cancelFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });

			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });

			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`??????? ?????? | ???? ??? ${page} ?? ??? ${pages.length} ????`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`??????? ?????? | ???? ??? ${page} ?? ??? ${pages.length} ????`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`??????? ?????? | ???? ??? ${page} ?? ??? ${pages.length} ????`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; 
				embed.setImage(pages[page-1]);
				embed.setFooter(`??????? ?????? | ???? ??? ${page} ?? ??? ${pages.length} ????`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**??? ??? ????? ???????**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});

client.on('message', msg => {
    if(msg.content.startsWith('-binv')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**?? ?????? ???**' + '``')
if(!user.bot) return msg.reply('`???? ???`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});

client.on("message", message => {
    if (message.content === "-rules") {
           message.react("?")
              message.react("?")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
  ?????????????????????????????????
[ ?·rules   |  ?????? ???????  ]
1) ????? ???? ?? ?? ??? 
2)????? ?????? ?? ????? ?? ??? ?? ??????? ????? 
5)????? ?????? ?? ???????  "
6)????? ????? ???????? ?? ?? ?? ??? ?????? 
7)????? ??? ??? ??  ????? ??????? ?????????  ????? ?????
8)????? ??? ?????? ?????? ???? ????????
9)???????? ?????  ?? - #cmd
__

@everyone || @here
?????????????????????????????????
  
    `)
   
      message.author.sendEmbed(embed)
      
      }
}); 




		
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`???? ???? ?:skin-tone-1: ??`)
            .setDescription(`?? ??????? ?????? ?? ?:skin-tone-1: ?? `)
            .addField('??   ????',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== ????????????? ??????? ???????????????? ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'leave')
        if (!channel) return;
        channel.send({embed : embed});
        })

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "-";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!-[ ??????? ]-! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});

client.on('message', msg => {
                        let args = msg.content.split(" ").slice(1).join(" ")
if (msg.content.split(" ")[0].toLowerCase() === "-cr") {
    if(!args) return msg.channel.send('`?????? ????? ??? ?????? ?????? ?????`');
             if (!msg.member.hasPermission('MANAGE_ROLES')) return;
              msg.channel.send(`** Done Colors Was Successful Created ${args}**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            msg.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
});

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '-color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('?')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('?'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('?').then(() =>
               c.react('?'))
           
       }).catch(e => console.error(e)
       )
   }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "email") {
function randomem() {
let email = '';
const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
for (let i = 0; i < 5; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
return email;
}
function randompass() {
let pass = '';
const CoDeS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 8; i++) pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
return pass;
}
const random1 = randomem();
const random2 = randompass();
message.author.send(`P.P.------------------------P.P.
Email : **${random1}@gmail.com**
Password : **${random2}**
P.P.------------------------P.P.`).catch(err => {
   if(err == "DiscordAPIError: Cannot send messages to this user") {
      return message.channel.send("**????? , ???? ??????? ?????? ?????? ?? ?????? ????? ???? ?? **");
}
});

message.channel.send("**?? ??????? ?????? ?? ????? | ? **")
}});

client.on('message', message => {
   if(message.channel.type === "dm") return;
     if(message.content.startsWith ("-marry")) {
     if(!message.channel.guild) return message.reply(' This command only for servers ')
     var proposed = message.mentions.members.first()
 
     if(!message.mentions.members.first()) return message.reply('???? ???? ??? ????').catch(console.error);
     if(message.mentions.users.size > 1) return message.reply('??? ?? ???? ???? ???').catch(console.error);
      if(proposed === message.author) return message.reply(`**???? ? **`);
       if(proposed === client.user) return message.reply(`** ??? ???????? **`);
             message.channel.send(`**${proposed}
??? ????? ??? ?????? ?? ${message.author}
????? ???? 10 ?????
????? ?????? ?? ??**`)
 
const filter = m => m.content.startsWith("??????");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`**${message.author} ? ${proposed} ??? ??? ????? ????? ???? ???????? ??????? ??????? ????? ??????? ??? ????? ??? ?????**`);
})
  .catch(collected => message.channel.send(`**?????? ????? ????? ???? ??????**`))
 
  const filte = m => m.content.startsWith("??");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
  message.channel.send(`**${message.author} ?? ??? ????**`);
})
 
 
 
 
 }
});


 

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("?? ?? ??????? ??? ??? ??? ????? ???? ??????? ??????")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("?")
    msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! ??**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});




client.on('message', message => {
  var prefix = "-"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**Please provide a Minecraft username. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });
client.on('message',  (message) => {
        if(message.content.startsWith('-love')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} :heart:  ???? ?? ?? ??? ???????   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
client.on('message',  (message) => {
        if(message.content.startsWith('-boom')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let bombs = [
    'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
    'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
	'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
    'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
	'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
	'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
    'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
	'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
	'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
    'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
	'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
	'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
    'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
	'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
	'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
    'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
	'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
	'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
    'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
	'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
	'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
    'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
	'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
	'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
    'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
	'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
	'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
    'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ??? ?? ???? ????? ?????  ????? ???? ${user.username}!`,
      image: {
        url: bombs[Math.floor(Math.random() * bombs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
client.on('message',  (message) => {
        if(message.content.startsWith('-hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
	'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
	'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
	'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
	'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
	'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
	'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
	'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
	'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
	'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
	'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
	'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
	'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
	'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
	'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
	'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
	'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
	'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
	'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
	'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
	'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
	'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
	'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
	'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
	'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
	'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
	'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ???? ??? ?? ??? ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
client.on('message',  (message) => {
        if(message.content.startsWith('-slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ???? ?????? ??? ??? ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} ?? ??? ?????? ???**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| ?? ????? ????? ???? ?????**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, ???? ????? ?????????**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | ?? ????? ???????**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});



client.login('Token');
