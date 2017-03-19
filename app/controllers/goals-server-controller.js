(function(require, exports) {

	'use strict';

	// Module dependencies
	var mongoose = require('mongoose'),
		Goal = mongoose.model('Goal');

	exports.postGoalData = function(req, res, next) {

		var goal = new Goal(req.body);
		console.log('Goal from goal setting page comin at ya', goal);

		goal.save(function(err, goals) {
			if (err) return console.error('theres an error', err);
			console.log('data has been SAVED! and here is the goal which is the req.body', goal);
			// send the object back to the client as the response -- next stop: client-side controller
			res.send(goal); // this simple line sends the data back to the client after the post
		});
	};

	exports.getGoalData = function(req, res, next) {

		// know will need to use the req params
		console.log('Yo! - onload and inside getGoalData'); // to server console

		// query the db and then stuff the query results into the response object
		// looks like you use the model to run the find; here, refer to Goal
		// TODO: Remove this hard-coded db query anbd go with a dyanmic query based on lion login
		Goal.find({empFirstName: 'Megan'}).limit(1).exec(function(error, results) {
			console.log('Megan GOAL results here!: ', results);
			if (error) {
				return next(error);
			}
			// Respond with valid data
			res.json(results);
		});
	};

})(require, exports);
