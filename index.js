const express = require('express');
const { json, urlencoded } = require("body-parser");
const path = require('path');
const app = express()
/*app.use(express.json());
app.use(express.urlencoded({extended: true}));*/
app.use(json({ limit: '10mb' }))
app.use(urlencoded({ limit: '10mb', extended: true }))
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname + "/public")));
require('dotenv').config();
const nsrestlet = require('nsrestlet');

var accountSettings = {
    accountId: process.env.ACCOUNT_ID,
    tokenKey: process.env.TOKEN_KEY,
    tokenSecret: process.env.TOKEN_SECRET,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET };
var urlSettings = {
    url: process.env.URL
}

var myInvoices = nsrestlet.createLink(accountSettings, urlSettings);

app.post('/app/verificacion', (request, response) => {
        
    myInvoices.post(request.body).then(function(body) {
        response.send(body);
    })
    .catch(function(error) {
        console.log("ERROR: " + JSON.stringify(error));
    });
});

app.get('/app/timeOut', (request, response) => {
    setTimeout(() => {
        response.send(true);
    }, 10000);
});

app.get('/app/timeOut5', (request, response) => {
    setTimeout(() => {
        response.send(true);
    }, 5000);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port ${port}`);
});