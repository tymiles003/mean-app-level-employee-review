
// require your matching controller:
var halfway = require('../../app/controllers/halfway-server-controller');

module.exports = function(app) {

	app.route('/perform-api/set-halfway').post(halfway.postData);
	app.route('/perform-api/get-halfway').get(halfway.getData);

};