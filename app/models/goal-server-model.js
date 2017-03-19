var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// TODO: Order fields like they are in the View
var GoalSchema = new Schema({

	resultsGoal1Desc: {
		type: String,
		required: true
	},
	resultsGoal1Date: {
		type: String, // Date
		required: true
	},
	resultsGoal1Status: {
		type: String,
		required: true
	},
	expertGoal1Desc: {
		type: String,
		required: true
	},
	expertGoal1Date: {
		type: String, // Date
		required: true
	},
	expertGoal1Status: {
		type: String,
		required: true
	},
	collabGoal1Desc: {
		type: String,
		required: true
	},
	collabGoal1Date: {
		type: String, // Date
		required: true
	},
	collabGoal1Status: {
		type: String,
		required: true
	},
	empFirstName: {
		type: String,
		required: true
	},
	empLastName: {
		type: String,
		required: true
	},
	empJobTitle: {
		type: String,
		required: true
	},
	feedbackYear: {
		type: Number,
		required: true
	},
	manFirstName: {
		type: String,
		required: true
	},
	manLastName: {
		type: String,
		required: true
	}
});

mongoose.model('Goal', GoalSchema);
