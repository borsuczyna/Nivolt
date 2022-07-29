const express = require('express');
const app = express();

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});

wrongReqeust = (req, res) => {
    res.status(404).send('404: Wrong request');
}

app.all('/', wrongReqeust);

//integrating scripts
require('./src/config.js');
require('./src/db.js');
require('./src/account.js');
require('./src/guilds.js');