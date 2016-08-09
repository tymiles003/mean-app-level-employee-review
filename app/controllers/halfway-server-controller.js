(function(){

	'use strict';

	// Module dependencies
	var mongoose = require('mongoose'),
		Halfway = mongoose.model('Halfway'); // include your mongoose model

	// Express middleware method:
	// process the request, save data to mongo db, issue a response (return back the data too?)
	exports.postData = function(req, res, next) {

		var halfway = new Halfway(req.body);
		console.log('Halfway object comin at ya', halfway);

		// save the object to the db -- successful, so obviously db connection is open
		halfway.save(function(err, halfway) {
			if (err) return console.error('theres an error', err);
		});
	};

})();
