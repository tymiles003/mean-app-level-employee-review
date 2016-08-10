// require your matching controller:
var halfway = require('../../app/controllers/halfway-server-controller');

module.exports = function(app) {

	app.route('/perform-api/halfway-set').post(halfway.postData);
	//app.route('/perform-api/halfway-get').get(halfway.getData);
};