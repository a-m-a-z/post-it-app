//CALL  FIREBASE  ===================
const	firebase = require('firebase');

//EXPORT  THIS  AS MODULE  ===================
module.exports = function (app) {

	// CREATE ROUTES ===================
	app.post('/group', (req, res) => {
		let  groupname = req.body.groupname;
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				const groupKey =firebase.database().ref('group').push({
					groupname : groupname
				}).key;
				res.send('You create Group name  '+groupname);
			}
			else {
				res.send('User is not signed in');
			}
		});
	});


	app.get('/group', function(req, res) {
		res.send('GROUP ROUTE!');
	});

};
