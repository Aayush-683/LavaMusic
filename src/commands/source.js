const util = require("../util");

module.exports = {
    name: "source",
    aliases: ["src"],
    exec: (msg) => {
        msg.channel.send(util.embed().setDescription("**This bot is powered by [LavaMusic](https://github.com/BlackKnight683/LavaMusic) which is an open source repository.\n\n**Use it for your own bot! [Click Here](https://youtube.com/c/BlackKnight683)"));
    }
};
