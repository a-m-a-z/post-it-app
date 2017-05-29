//CALL  FIREBASE  ===================
let	firebase = require('firebase');

//EXPORT  THIS  AS MODULE  ===================
module.exports =  (app) => {

// SIGN-IN ROUTES ===================
	app.post('/signin', (req, res) => {

		let  email = req.body.email,
			password = req.body.password;

		// sign in with email and password
		firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() =>{
	res.send({message: 'Success: A user has been successfuly login.'});
}).catch((error) => {
	res.status(401).send({message: error.code});
	res.send({message: error.message});
});
	});

};
