
//THIS  EXPORT MODULE  ===================
module.exports =  (app) => {

// SIGN-IN ROUTES ===================
	app.get('/', function(req, res) {
		res.send('WELCOME TO POSTIT !   USE   "/register  to sign-up",  "/signin  to sign-in",   "/group to create a group" ');
	});
}
