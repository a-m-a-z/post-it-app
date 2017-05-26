//CALL  FIREBASE  ===================
let	firebase = require('firebase');

//THIS  EXPORT MODULE  ===================
module.exports =  (app) => {

// SIGN-IN ROUTES ===================
	app.post('/signin', (req, res) => {

		let  email = req.body.email,
			password = req.body.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
        .then(  res.send({message: 'Success: A user has been successfuly login.'}))
      .catch((err) => {	res.send({message: 'You have error code '+err.code+' and the error message is'+err.message});
});
	});
	app.get('/signin', function(req, res) {
		res.send('SIGN-IN ROUTE ');
	});

};
