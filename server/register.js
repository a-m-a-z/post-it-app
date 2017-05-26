//CALL  FIREBASE  ===================
const	firebase = require('firebase');

//THIS  EXPORT MODULE  ===================
module.exports = (app) => {

	// SIGN-UP ROUTES ===================
	app.post('/register', (req, res) => {
		let full_name = req.body.full_name,
			email =     req.body.email,
			password = req.body.password;
		firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( (user) =>{
	firebase.database().ref('users').push({
		username : full_name,
		email : email,
		password: password
	});
	res.send({message: 'Success: A user has been successfuly registered.'})
})
        .catch((err) => {	res.send({message: 'You have error code '+err.code+' and the error message is'+err.message});
});
	});

	app.get('/signin', function(req, res) {
		res.send('REGISTRATION ROUTE!');
	});

};
