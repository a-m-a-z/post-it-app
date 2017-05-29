//CALL  FIREBASE  ===================
const	firebase = require('firebase');

//EXPORT  THIS  AS MODULE  ===================
module.exports = function (app) {

	// ADD USER ROUTES ===================
	app.post('/group/:groupId/users', (req, res) => {
		let userId =req.body.userId;
		let groupId= req.params.groupId;
     //check if user have signin
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				//insert user into the group
				firebase.database().ref(`group/${groupId}/users`).child(userId).set({
					userId :userId
				});
				res.send('Member add to the group ');
			}else{
				res.send('Please signin ');
				
			}
		});
	});
};
