// require your matching controller:
var halfway = require('../../app/controllers/halfway-server-controller');
var goalsServerCntl = require('../../app/controllers/goals-server-controller');

module.exports = function(app) {
	// Goals
	app.route('/perform-api/goals-set').post(goalsServerCntl.postGoalsData);

	// Halfway Checkin Test
	app.route('/perform-api/halfway-set').post(halfway.postData);
};