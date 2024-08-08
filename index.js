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
        console.log("ENTRASTE A RESPONSEBODY**************");
        console.log(body);
        console.log("*********BODY****");
        response.send(body);
    })
    .catch(function(error) {
        console.log("ERROR: " + JSON.stringify(error));
    });
});

app.post('/app/getCustomer', (request, response) => {    
    setTimeout(() => {
    myInvoices.get(request.body).then(function(res) {
        console.log("*********ENTRASTE A GET CUS***********");
        console.log(res);
        console.log("**************************************");
        if (res == 'Entraste') {
           return "Customer no verificado"
        } else {
            response.send(res);
        }
    })
    .catch(function(error) {
        console.log("ERROR: " + JSON.stringify(error));
    });
    }, 10000);    
});

app.get('/app/timeOut', (request, response) => {
    setTimeout(() => {
        response.send(true);
    }, 6000);
});

app.get('/app/timeOut5', (request, response) => {
    setTimeout(() => {
        response.send(true);
    }, 3000);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port ${port}`);
});