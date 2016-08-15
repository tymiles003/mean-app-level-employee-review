(function(){

	'use strict';

	// Module dependencies
	var mongoose = require('mongoose'),
		Halfway = mongoose.model('Halfway'); // include your mongoose model

	// Express middleware method:
	// process the request, save data to mongo db, issue a response (return back the data too?)
	exports.postData = function(req, res, next) {

		var halfway = new Halfway(req.body); // post actions put their payload in the 'body'
		console.log('Halfway object comin at ya', halfway);
		console.log('heres the full request body', req.body);
		//console.log('heres the full response', res);

		// save the object to the db -- successful, so obviously db connection is open
		halfway.save(function(err, halfway) {
			if (err) return console.error('theres an error', err);
		});
		console.log('data has been SAVED! and here is the halfway which is the req.body', halfway);
		// send the object back to the client as the response -- next stop: client-side controller
		res.send(halfway);
	};

	exports.getHalfwayData = function(req, res, next) {

		// know will need to use the req params
		console.log('Yo! - onload and inside getHalfwayData'); // to server console

		// query the db and then stuff the query results into the response object
		// looks like you use the model to run the find, here, the Halfway
		Halfway.find({empFirstName: 'Wayne'}).limit(1).exec(function(error, results) {
			if (error) {
				return next(error);
			}
			// Respond with valid data
			res.json(results);
		});
		// query:: db.halfways.find({empFirstName: 'Scott'}).limit(1);
		//console.log('here are the non-null results', results);


	};

})();
