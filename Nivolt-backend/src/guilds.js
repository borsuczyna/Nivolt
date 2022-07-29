const config = require('./config');
const db = require('./db').connection;

class Guild {
    constructor() {
        this.id = null;
        this.name = null;
        this.owner = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    async get(id) {
        const guild = await db.query(`SELECT * FROM guilds WHERE id = ?`, [id]);
        if (guild.length === 0) {
            return null;
        }
        this.id = guild[0].id;
        this.name = guild[0].name;
        this.owner = guild[0].owner;
        this.createdAt = guild[0].createdAt;
        this.updatedAt = guild[0].updatedAt;
        return this;
    }

    async create(name, owner) {
        const guild = await db.query(`INSERT INTO guilds (name, owner, createdAt, updatedAt) VALUES (?, ?, ?, ?)`, [name, owner, new Date(), new Date()]);
        this.id = guild.insertId;
        this.name = name;
        this.owner = owner;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        return this;
    }

    async getChannels() {
        const channels = await db.query(`SELECT * FROM channels WHERE guild = ?`, [this.id]);
        this.channels = channels;
        return channels;
    }

    async getRoles() {
        const roles = await db.query(`SELECT * FROM roles WHERE guild = ?`, [this.id]);
        this.roles = roles;
        return roles;
    }

    async getEmojis() {
        const emojis = await db.query(`SELECT * FROM emojis WHERE guild = ?`, [this.id]);
        this.emojis = emojis;
        return emojis;
    }

    async getMembers() {
        const members = await db.query(`SELECT * FROM members WHERE guild = ?`, [this.id]);
        this.members = members;
        return members;
    }
}