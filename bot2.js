'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
    return;
  }
  if (message.content === '!url') {
    message.channel.send('https://example.com');
    return;
    }
    if (message.content === 'rango') {
     message.channel.send('!rank');
     return;
     }
     if (message.content != 'hola') {
        message.channel.send('hola');
        return;
     }

});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzgzMzEyNjMxOTQyNDc5ODg3.X8Y6vA.u2l_bReQBuXMAWUPhDUFW7185Q0');