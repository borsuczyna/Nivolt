const config = require('./config');
const db = require('./db').connection;

class Guilds{
    constructor(){

    };

    async createGuild(name, owner){
        if(name.length < 5){
            return console.log("Please enter an longer name");
        };

        return new Promise((resolve, reject) => {
            db.query("INSERT INTO `guilds` (`name`, `owner`) VALUES (?, ?)", [name, owner], (err, res) => {
                if (err) reject(err);

                resolve(res);
            });
        });
    };
};

class Channels{
    constructor(){

    };

    selectedChannel = 0;
    channel(id){
        return this.selectedChannel = id;
    };

    sendMessage(message){
        db.query("INSERT INTO `channel_messages` VALUES ('content', `owner`, `channel`) VALUES (?, ?, ?)", [content, 1, this.channel], (err, res) => {
            if (err) throw err;
            console.log("MESSAGE ADDED ON CHANNEL " + this.selectedChannel);
        });
    };

    createChannel(name, guild){
        if(name.length == 0){
            return;
        };

        db.query("INSERT INTO `channels` (`name`, `guild`) VALUES (?, ?)", [name, guild], (err, res) => {
            if (err) throw err;
        });
    };
}

let channels = new Channels();
channels.channel(1).sendMessage('test');

async function createGuild(name, owner){
    let guild = new Guilds();
    let guild_id = await guild.createGuild(name, owner);

    return guild_id.insertId;
};