
module.exports = {
  name: "menu",
  description: "Show the bot menu",
  execute(client, message) {
    client.sendMessage(message.chat, { audio: fs.readFileSync('./media/menu.mp3'), mimetype: 'audio/mp4' });
  }
};
