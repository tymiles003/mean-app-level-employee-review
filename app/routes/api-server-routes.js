// require your matching controller:
var halfway = require('../../app/controllers/halfway-server-controller');
var goals = require('../../app/controllers/goals-server-controller');

module.exports = function(app) {

	app.route('/perform-api/halfway-set').post(halfway.postData);
	//app.route('/perform-api/halfway-get').get(halfway.getData);
	app.route('/perform-api/goals').post(goals.postData);

};