/*
 * api-server-routes.js
 */

// require your matching server-side controllers:
var goalsServerCntl = require('../../app/controllers/goals-server-controller');
var empServerCntl = require('../../app/controllers/employee-server-controller');

var halfway = require('../../app/controllers/halfway-server-controller');

module.exports = function(app) {
	// Register & Login

	// Goals
	app.route('/perform-api/goals-set').post(goalsServerCntl.postGoalsData);

	// Halfway Checkin Test
	app.route('/perform-api/halfway-set').post(halfway.postData);
	app.route('/perform-api/halfway-get').get(halfway.getHalfwayData);
};
