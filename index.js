const express = require('express');
const config = require('./config');
const path = require('path');
const app = express();
var nsrestlet = require('nsrestlet');

app.use(express.static(path.join(__dirname + "/public")));

app.get('/getToken', (req, res) => {
        
    var accountSettings = {
        accountId: process.env.ACCOUNT_ID,
        tokenKey: process.env.TOKEN_KEY,
        tokenSecret: process.env.TOKEN_SECRET,
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET 
    };
    var urlSettings = {
        url: process.env.URL_RESTLET_TOKEN
    }

    var myInvoices = nsrestlet.createLink(accountSettings, urlSettings);
        
    myInvoices.get({prueba: ""}, function(error, body)
    {
        res.send(body);
    });    
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on port ${config.PORT} and host ${config.HOST}`)
})