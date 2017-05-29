
//THIS  EXPORT MODULE  ===================
module.exports =  (app) => {

// SIGN-IN ROUTES ===================
	app.get('/', function(req, res) {
		res.send('WELCOME TO POSTIT ! ');
	});
}
