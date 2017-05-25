const express = require('express');

let	firebase = require('firebase');
const app = express();


module.exports = function (app) {
	app.post('/signin', (req, res) => {

		let  email =     req.body.email,
			password = req.body.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
        .then(  res.send({message: 'Success: A user has been successfuly login.'}))
      .catch((err) => {	res.send({message: 'You have error code '+err.code+' and the error message is'+err.message});

});
	});

	app.get('/signin', function(req, res) {
		res.send('welcome to the login page!');
	});

};
