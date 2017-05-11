const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  //Splits the message into words.
  let msg = message.content.split(" ");

  //If it does not have words, returns...
  if(msg.length < 1) return;

  //TODO: This needs to be re-writed one day...
  //!ping command
  if (message.content === '!ping') {
    message.reply('pong');
  } else if (msg[0] == "!count") {//!count command
    let count = parseInt(msg[1]);
    message.delete(count*1000);
    for(let i = 0; i < count; i++) {
      message.reply((i+1)).then(msg => msg.delete(100));
    }
  } else if(msg[0] == "!ruletarusa") {//!ruletarusa command
    message.reply(
        Math.floor(Math.random() * 20) === 1
        ? "¡Pum! Muerto"
        : "La suerte te acompaña..."
    ).then(msg => msg.delete(5000));
    message.delete();
  } else if(msg[0] == "!insultar") {//!insultar command
    let ins = ["Hijo de puta!", "Maricon!", "Tonto!", "Manco mental!"];
    message.reply(ins[Math.floor(Math.random()*ins.length)]);
    message.delete();
  }
});

client.login('MzEyMjUyMjgxNTY1MzQ3ODUy.C_YXkA.idmoTI6elxr2ICP6wrcFgq4P7Bo');
