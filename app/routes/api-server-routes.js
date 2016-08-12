/*
 * api-server-routes.js
 */

// require your matching server-side controllers:
var goalServerCntl = require('../../app/controllers/goals-server-controller');
var memberServerCntl = require('../../app/controllers/employee-server-controller');

var halfway = require('../../app/controllers/halfway-server-controller');

// List your server-side routes with Express; TODO: Look at using ?name=value query strings in your api routes
module.exports = function(app) {
	// Register & Login
	app.route('/perform-api/member-set').post(memberServerCntl.postMemberData);

	// Goals
	app.route('/perform-api/goals-set').post(goalServerCntl.postGoalData);

	// Halfway Checkin Test
	app.route('/perform-api/halfway-set').post(halfway.postData);
	app.route('/perform-api/halfway-get').get(halfway.getHalfwayData);
};
