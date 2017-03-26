/*
 * file: goals-server-controller.js
 */

(function(require, exports) {

	'use strict';

	// Mongoose, model dependencies
	var mongoose = require('mongoose'),
		Goal = mongoose.model('Goal');

	// GET Goals from DB
	exports.getGoalData = function(req, res, next) {

		// query the db with a model (and params) and process results
		Goal.find({currentUser: req.query.currentUser}).limit(1).exec(function(error, results) {
			if (error) return next(error);
			// Respond with valid data
			res.json(results);
		});
	};

	// POST Goal to DB
	exports.postGoalData = function(req, res, next) {
		var goal = new Goal(req.body);
		// save this object to the mongo db
		goal.save(function(err, goals) {
			if (err) return console.error('theres an error saving to the mongo db', err);
			// Send Goal data object back to the client as response (res)
			res.send(goal);
		});
	};

})(require, exports);
