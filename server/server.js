const express = require('express');
let	bodyParser = require('body-parser');


let app = express();
let port = process.env.PORT || 3000;
let  register = require('../server/register');
let  signin = require('../server/signin');
let  group = require('../server/group');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


register(app);
signin(app);
group(app);


app.listen(port, () => {
console.log('We are live on ' + port);
});
