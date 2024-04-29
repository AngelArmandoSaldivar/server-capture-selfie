const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'https://server-capture-selfie-b01dd8c9a312.herokuapp.com',
  PORT: process.env.PORT || 3000

}