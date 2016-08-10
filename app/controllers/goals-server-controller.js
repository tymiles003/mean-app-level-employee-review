(function() {
	'use strict';

	var mongoose = require('mongoose'),
		Goals = mongoose.model('Goals');

	export.postData = function(req, res, next) {

		var goals - new Goals(req.body);
		console.log('Goals from goal setting page', goals);

		goals.save(function(err, halway) {
			if(err)
				return console.error('theres an error', err);
		});
	};
});