const db = require('./db').connection;
const jwt = require('jsonwebtoken');
const config = require('./config');
const md5 = require('md5');

class User {
    constructor (){
        this.username = null;
        this.email = null;
        this.password = null;
        this.createdAt = null;
        this.updatedAt = null;
    };

    async login(usernameOrEmail, password) {
        if(!usernameOrEmail || !password){
            return "Please fill out all data";
        };

        var fieldSearch = "username";
        if(config.validateEmail(usernameOrEmail)){
            fieldSearch = 'email';
        }

        if(!config.onlyArabic(usernameOrEmail) && fieldSearch != 'email'){
            return "only arabic characters are accepted";
        };

        return new Promise((resolve, reject) => {
            db.query("SELECT `id`, `username`, `password` FROM `users` WHERE " + fieldSearch + "=?", [usernameOrEmail], (err, res) => {
                if(err) reject(err);
                
                if(md5(password) == res[0].password){
                    var token = jwt.sign({id: res[0].id, username: res[0].username}, config.secret_token, {
                        expiresIn: 86400 
                    });
                    // console.log("User " + res[0].username + " has logged in");
                    resolve(token);
                };
            });
        });
    }

    async register(username, email, password) {
        if(!username || !email || !password){
            return "Please fill out all data";
        };

        if(!config.validateEmail(email)){
            return "Please enter a valid email";
        }

        if(!config.onlyArabic(username)){
            return "only arabic characters are accepted";
        }

        return new Promise((resolve, reject) => {
            db.query("SELECT `id` FROM `users` WHERE `username`=?", [username], (err, res) => {
                if(err) reject(err);
                if(res.length > 0){
                    reject("Username already exists");
                } else {
                    db.query("INSERT INTO `users` (`username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES (?, ?, ?, ?, ?)", [username, email, md5(password), new Date(), new Date()], (err, res) => {
                        if(err) reject(err);
                        resolve("User " + username + " has registered");
                    });
                }
            });
        });
    }

    async get(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT `id`, `username`, `email`, `createdAt`, `updatedAt` FROM `users` WHERE `id`=?", [id], (err, res) => {
                if(err) reject(err);
                if(res.length > 0){
                    this.id = res[0].id;
                    this.username = res[0].username;
                    this.email = res[0].email;
                    this.createdAt = res[0].createdAt;
                    this.updatedAt = res[0].updatedAt;
                    resolve(this);
                } else {
                    reject("User not found");
                }
            });
        });
    }
};