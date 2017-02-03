/*
 * file: appi-server-routes.js
 */

// 1- require your matching server-side controllers:
var employeeServerCntl = require('../../app/controllers/employee-server-controller');
var goalServerCntl = require('../../app/controllers/goals-server-controller');
var halfwayServerCntl = require('../../app/controllers/halfway-server-controller');
var feedbackServerCntl = require('../../app/controllers/peer-feedback-server-controller');

// 2- List your server-side routes with Express; TODO: Look at using ?name=value query strings in your api routes for clarity
module.exports = function(app) {

	// Register & Login
	app.route('/perform-api/member-set').post(employeeServerCntl.postMemberData);

	// Goals
	app.route('/perform-api/goal-set').post(goalServerCntl.postGoalData);
	app.route('/perform-api/goal-get').get(goalServerCntl.getGoalData);

	// Halfway Checkin Test
	app.route('/perform-api/halfway-set').post(halfwayServerCntl.postData);
	app.route('/perform-api/halfway-get').get(halfwayServerCntl.getHalfwayData);

	// Peer Feedback
	app.route('/perform-api/feedback-set').post(feedbackServerCntl.postFeedbackData);

};
