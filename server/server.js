const express = require('express');
let	bodyParser = require('body-parser');
let	firebase = require("firebase");

let app = express();
let port = process.env.PORT || 3000;
let  reg = require('../server/register');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


reg(app);



app.listen(port, () => {
  console.log('We are live on ' + port);
});
