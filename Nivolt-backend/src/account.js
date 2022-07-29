const db = require('./db').connection;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const md5 = require('md5');

class UserLogin{
    constructor(usernameOrEmail, password){
        if(!usernameOrEmail || !password){
            return console.log("Please fill out all data");
        };

        var fieldSearch = "username";
        if(config.validateEmail(usernameOrEmail)){
            fieldSearch = 'email';
        }

        if(!config.onlyArabic(usernameOrEmail) && fieldSearch != 'email'){
            return console.log("only arabic characters are accepted");
        };

        db.query("SELECT `id`, `username`, `password` FROM `users` WHERE " + fieldSearch + "=?", [usernameOrEmail], (err, res) => {
            if(err) throw err;
            
            if(md5(password) == res[0].password){
                var token = jwt.sign({id: res[0].id, username: res[0].username}, config.secret_token, {
                    expiresIn: 86400 
                });
                console.log("User " + res[0].username + " has logged in");
                return token;
            };
        });
    };
};

const accountLogin = new UserLogin("j@gmail.com", '123456');

class UserRegister{
    constructor(username, password, confirmPassword, email){
        if(!username || !password || !confirmPassword || !email){
            console.log("No arguments");
            return;
        };

        if(password != confirmPassword){
            return console.log("Password are not the same");
        }

        if(!config.onlyArabic(username)){
            return console.log("only arabic characters are accepted");
        };

        if(!config.validateEmail(email)){
            return console.log("Please enter an valid e-mail!");
        }

        db.query("SELECT `id` FROM `users` WHERE `email`=?", [email], (err, res) =>{
            if(err) throw err;
            if(res.length > 0){
                console.log("E-Mail already in use");
                return;
            };

            db.query("SELECT `id` FROM `users` WHERE `username`=?", [username], (err, res) =>{
                if(err) throw err;
                if(res.length > 0){
                    console.log("Account already exists");
                    return;
                };
    
                db.query("INSERT INTO `users` (`username`, `password`, `email`) VALUES (?, ?, ?)", [username, md5(password), email], function(err, res){
                    if(err) throw err;
                    console.log("Created new account");
                });
            });
        });
    };
};

//const accountRegister = new UserRegister("IAN", "123456", "123456", "j@il.com");