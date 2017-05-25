const	firebase = require('firebase');

module.exports =  (app) => {
	app.post('/group', (req, res) => {

		let groupname = req.body.groupname;

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				const groupKey =firebase.database().ref('group').push({

					groupname : groupname
				}).key;
				res.send('Cool');
			}
			else {
				res.send('User is not signed in');
			}
		});
	});

	app.get('/group', function(req, res) {
		res.send('welcome to the group page!');
	});

};
