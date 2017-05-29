//CALL  FIREBASE  ===================
const	firebase = require('firebase');

//EXPORT  THIS  AS MODULE  ===================
module.exports = function (app) {

	// CREATE ROUTES ===================
	app.post('/group', (req, res) => {
		let  groupname = req.body.groupname;
		firebase.auth().onAuthStateChanged((user) => {
			if(user){

				// this will get the ID of person than create the group
				let userId = user.uid;

				// create the new group
				const groupKey =firebase.database().ref('group').push({
					groupname : groupname
				}).key;

				//add user to the member of group
				firebase.database().ref().child('group/'+groupKey+'/users/'+userId);

				res.send({message: ' You create Group name  '+groupname });
			}
			else {
				res.status(403).send({message: 'User is not signed in'});
			}
		});
	});


};
