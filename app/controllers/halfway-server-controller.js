// a real js program -- writing a controller is where the coding happens
(function(){

	'use strict';

	/**
	 * Module dependencies
	 */
var mongoose = require('mongoose'),
	//User = mongoose.model('User'); // include your model ?!
	Halfway = mongoose.model('Halfway');

// TODO: Follow controller step by step  -- use users controller to help you save data to db
// I think you need a new halfway here

	// local test data to tray and post to the db

	// method that tries to post the data
	exports.postData = function(req, res, next) {

		var halfwayTestData = {
			empFirstName: 'Scott',
			empLastName: 'Kao',
			manFirstName: 'Kevin',
			manLastName: 'So'
		};

		console.log('hi: ', JSON.stringify(halfwayTestData))
	};

	// MONGOOSE
	// data.save();//

})();
