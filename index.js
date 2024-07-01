const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname + "/public")));

app.get('/verificationCustomer', (req, res) => {

    console.log("REQUEST: " + JSON.stringify(req.body));

    res.send("ok");

    //var nsrestlet = require('nsrestlet');
 
    //For OAuth (we can do NLAuth too, see later in documentation):
    /*var accountSettings = {
        accountId: "9323217",
        tokenKey: "5e39a16ee321f9fab4d635bc694decb02b470de42e13c362d5f0f9b8a6b8b471",
        tokenSecret: "84dd7adcb9277ab4fca81c810db4f0862a712545c26b9a79d3af0c3cd4fc7da3",
        consumerKey: "6909223765d68229f521ae5355031e937bc39ff684ce9a38ca644f8c9929bf1a",
        consumerSecret: "97faf817b70724635ce207ee79480cb8f26b0ed0348a1e4bd03d23d8fb98054a" };
    var urlSettings = {
        url: 'https://9323217.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=385&deploy=1'
    }
    
    //create a link
    var myInvoices = nsrestlet.createLink(accountSettings, urlSettings);
    
    //then call get, post, put, or delete
    myInvoices.get({id: '12345'}, function(error, body)
    {
        res.send(body);
    });*/
    
});

function consultarToken() {    
}

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})