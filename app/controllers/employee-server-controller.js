(function(){

	'use strict';

	// Module dependencies
	var mongoose = require('mongoose'),
		Employee = mongoose.model('Employee');

		// Use your mongoose model to interact with the data in a mongo db document store
		exports.postMemberData = function(req, res, next) {

			var member = new Employee(req.body);
			console.log('Employee/Member from Register page comin at ya', member);

		member.save(function(err, member) {
			if (err) return console.error('theres an error', err);
			console.log('data has been SAVED! and here is the member which is the req.body', member);
			// send the object back to the client as the response -- next stop: client-side controller
			res.send(member); // this simple line sends the data back to the client (here, the member object)
		});
	};

})();
