
module.exports = {
  name: "getsession",
  description: "Generate a session ID with music",
  execute(client, message) {
    client.sendMessage(message.chat, { audio: fs.readFileSync('./media/session-id.mp3'), mimetype: 'audio/mp4' });
  }
};
