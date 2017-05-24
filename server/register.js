const express = require('express');
let	bodyParser = require('body-parser');
let	firebase = require("firebase");
 const app = express();

 firebase.initializeApp({
 	apiKey: "AIzaSyA5QqiYnZRRUPfD9TkmchFtnGs9M8eF740",
  authDomain: "postlt-54c26.firebaseapp.com",
  databaseURL: "https://postlt-54c26.firebaseio.com",
  projectId: "postlt-54c26",
  storageBucket: "postlt-54c26.appspot.com",
  messagingSenderId: "1002590696573"
 });



module.exports = function (app) {
app.post('/register', (req, res) => {

  let full_name = req.body.full_name,
        email =     req.body.email,
        password = req.body.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(  res.send({message: "Success: A user has been successfuly registered."})
          )
        .catch((err) => {
            let errorCode = err.code;let full_name = req.body.full_name,
                  email =     req.body.email,
                  password = req.body.password;
            let errorMessage = err.message;
        });
  });

app.get('/register', function(req, res) {
  	res.send('welcome to the register page!');
  });

};
