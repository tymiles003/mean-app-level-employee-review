(function() {

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
			res.send(goal); // this simple line sends the data back to the client
		});
	};
})();
