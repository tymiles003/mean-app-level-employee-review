(function(){

	'use strict';

	// Module dependencie
	var mongoose = require('mongoose'),
	Halfway = mongoose.model('Halfway'); // include your mongoose model

	// Express middleware method:
	// processes the request, save data to mongo db, issue a response (return back the data too?)
	exports.postData = function(req, res, next) {

		console.log('YES! Server postData Function called!');

		// 	var user = new User(req.body); // from users-server-controller.js
		var halfway = new Halfway(req.body);

		console.log('heres the halfway object', halfway);

		res.send('hi from server side'); // test to send something back to the client (here, a string)
	};

	// MONGOOSE
	// data.save();//

})();
