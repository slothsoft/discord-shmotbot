const config = require("./config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

const ShmotBot = require("./lib/ShmotBot.js");
var bot = new ShmotBot();
 
client.on("ready", () => {
	console.log("ShmotBot is ready.");
});
 
client.on("message", (message) => {
	// It's good practice to ignore other bots
	if (message.author.bot) { 
		return;
	}
	
	// let the bot react to its name
	if (bot.shouldReactTo(message.content)) {
		message.channel.send(bot.getReactionTo(message.content));
	}
});
 
client.login(config.token);