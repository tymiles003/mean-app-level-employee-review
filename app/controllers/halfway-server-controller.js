(function(){

	'use strict';

	// Module dependencie
	var mongoose = require('mongoose'),
	Halfway = mongoose.model('Halfway'); // include your mongoose model

	// Express middleware method:
	// processes the request, save data to mongo db, issue a response (return back the data too?)
	exports.postData = function(req, res, next) {

		// 	var user = new User(req.body); // from users-server-controller.js
		var halfway = new Halfway(req.body);
		console.log('Hey! heres the halfway object', halfway);

		// try saving the data to the db
		halfway.save( function(err) {
			if (err) return console.error('theres an error', err);
		});

		//res.send('hi from server side'); // gotta send something back to the client (here, a string)
	};

})();
