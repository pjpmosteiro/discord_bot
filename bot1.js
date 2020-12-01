const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    console.log(`Message received: ${msg.content}`)

if (msg.content != null) {
    if (msg.content === '!ping') {
        msg.reply('pong');
        }
       if (msg.content === '!url') {
       msg.reply('https://example.com');
       }

       if (msg.content === 'rango') {
        msg.reply('!rank');
        }

 } }
 );


 

client.logout('NzgzMzEyNjMxOTQyNDc5ODg3.X8Y6vA.u2l_bReQBuXMAWUPhDUFW7185Q0');