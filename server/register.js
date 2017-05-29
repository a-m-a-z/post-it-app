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
	user.updateProfile({
		username : full_name
	});
	res.send({message: 'Success: A user has been successfuly registered.'})
})
        .catch((err) => {	res.send({message: 'You have error code '+err.code+' and the error message is'+err.message});
});
	});

	app.get('/register', function(req, res) {
		res.send('REGISTRATION ROUTE!');
	});

};
