const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
app.use(express.static(path.join(__dirname + "/public")));
const PORT = process.env.PORT || 5000;
const OAuth = require('oauth-1.0a');
const crypto = require('crypto-js');

const consumerKey = "6909223765d68229f521ae5355031e937bc39ff684ce9a38ca644f8c9929bf1a"; // Client ID
const consumerSecret = "97faf817b70724635ce207ee79480cb8f26b0ed0348a1e4bd03d23d8fb98054a"; // Client Secret
const tokenId = "5e39a16ee321f9fab4d635bc694decb02b470de42e13c362d5f0f9b8a6b8b471";
const tokenSecret = "84dd7adcb9277ab4fca81c810db4f0862a712545c26b9a79d3af0c3cd4fc7da3";
const restletUrl = "https://9323217.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=385&deploy=1";
const accountId = "9323217"; // Realm

const oauth = OAuth({
    consumer: {
        key: consumerKey,
        secret: consumerSecret,
    },
    signature_method: 'HMAC-SHA256',
    hash_function(base_string, key) {
        return crypto.HmacSHA256(base_string, key).toString(crypto.enc.Base64);
    },
});

const token = {
    key: tokenId,
    secret: tokenSecret,
}

const requestData = {
    url: restletUrl,
    method: 'get',
}

const authHeader = oauth.toHeader(oauth.authorize(requestData, token));

const headers = {
    'Authorization': `${authHeader.Authorization}, realm="${accountId}"`,
    'Content-Type': 'application/json'
}

const options = {
    headers: headers,
    method: 'get',
    url: restletUrl
};

app.get('/prueba', (req, res) => {         
    axios(options)
    .then((response) => {
        console.log("RESPUESTA CORRECTA");
        res.send("Respuesta correcta");
        //console.log(response);        
    }, (error) => {
        res.send("RESPUESTA INCORRECTA");
        //res.send("Error");        
    }); 
});

function consultarToken() {    
}

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })