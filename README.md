#  Discord Shmot Bot

- **Author:** [Stef Schulz](mailto:s.schulz@slothsoft.de)
- **Repository:** <https://github.com/slothsoft/discord-shmotbot>


My first attempt at a Discord bot. It uses the [shm-reduplication](https://en.wikipedia.org/wiki/Shm-reduplication) to mock your last word:

![Screenshot](https://raw.githubusercontent.com/slothsoft/discord-shmotbot/master/images/screenshot.png)

The first word has to be his name (ShmotBot, Shmotty or Shmot) for him to react.



## Getting Started

### Run Bot Locally

To run the bot locally, you have to do the following:

1. Clone this repository (duh!)
1. Follow [An Idiot's Guide](https://anidiots.guide) until you have a Bot token ready to use and NodeJS installed
1. Install discord packages via command line `npm install`
1. Create a file named *config.json* in the base folder that contains the string `{"token":"YourSuperSecretToken"}`
1. Start bot via command line `node index.js`
1. Open up discord and see it in action

**Note:** To redeploy it press Control+C and run `node index.js` again.



### Add Bot to Server

Can you just add this bot to your server? I'm not sure yet, but I don't think so. You need to let the PC running it on 24/7.



## Additional Information

- This project was my first attempt at semi-professional JavaScript development
- I was following [An Idiot's Guide](https://anidiots.guide)
- I'm not sure what to commit; I'm trying to see what works and what the [internet suggests](https://github.com/github/gitignore/blob/master/Node.gitignore) 
- [Crash Course on Testing](https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02) (because first attempt)
- [How to Define a JavaScript Class](https://www.phpied.com/3-ways-to-define-a-javascript-class/) (I'm really new to this)



## License

This project is licensed under the MIT - see the [license file](https://github.com/slothsoft/discord-shmotbot/blob/master/LICENSE) for details.
