const express = require('express');
let	firebase = require('firebase');
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
        .then( (user) =>{
          firebase.database().ref("users").push({
            username : full_name,
            email : email,
            password: password
          });
           res.send({message: "Success: A user has been successfuly registered."})
        })

        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
        });
  });

//  let db = firebase.database;
// app.get('/register', function(req, res) {
//   	res.send(db);
//   });

};
