const	firebase = require('firebase');


module.exports = function (app) {
	app.post('/group', (req, res) => {

		let  groupname = req.body.groupname;

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				const groupKey =firebase.database().ref('group').push({
					groupname : groupname
				}).key;
				res.send('You create Group name '+groupname);
			}
			else {
				res.send('User is not signed in');
			}
		});
	});

	app.get('/group', function(req, res) {
		res.send('want to create page? Use post method');
	});
};
