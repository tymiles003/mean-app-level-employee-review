
// require your matching controller:
var halfway = require('../../app/controllers/halfway-server-controller');

module.exports = function(app) {

	// example route - app.route(<URI>).post(<JS-Method-in-Controller>)
	//app.route('/auth/signup').post(users.signup);

	app.route('/perform-api/halfway').post(halfway.postData);
};