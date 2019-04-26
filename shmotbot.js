const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
	console.log("ShmotBot is ready.");
});
 
client.on("message", (message) => {
	// It's good practice to ignore other bots
	if (message.author.bot) 
		return;
	
	if (message.content.startsWith("ping")) {
		message.channel.send("pong!");
	}
});
 
client.login(config.token);