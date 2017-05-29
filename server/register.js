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
}).catch((error) => {
	res.status(401).send({message: error.code});
	res.send({message: error.message});
});
	});



};
