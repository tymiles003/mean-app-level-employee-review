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

	// local test data to tray and post to the db
	var halfwayTestData = {
		empFirstName: 'Scott',
		empLastName: 'Kao',
		manFirstName: 'Kevin',
		manLastName: 'So'
	};

	// method that tries to post the data
	exports.postData = function(req, res, next) {
		console.log(JSON.stringify(halfwayTestData))
	};

	// MONGOOSE
	// data.save();// 

})();
