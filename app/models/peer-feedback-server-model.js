/*
 * file: peer-feedback-server-model.js
 */
// 1- require the mongoose libs you need
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// 2- define the Schema (tied to form fields in the view)
var PeerFeedbackSchema = new Schema({
	peerFirstName: {
		type: String,
		required: true
	},
	peerLastName: {
		type: String,
		required: true
	},
	employeeFirstName: {
		type: String,
		required: true
	},
	employeeLastName: {
		type: String,
		required: true
	},
	feedbackMonth: {
		type: String,
		required: true
	},
	feedbackYear: {
		type: String,
		required: true
	},
	resultsImprovement: {
		type: String,
		required: true
	},
	resultsExcellence: {
		type: String,
		required: true
	},
	resultsDetail: {
		type: String,
		required: true
	},
	resultsDeadlines: {
		type: String,
		required: true
	},
	expertiseRole: {
		type: String,
		required: true
	},
	expertiseImprove: {
		type: String,
		required: true
	},
	expertiseSkills: {
		type: String,
		required: true
	},
	expertiseAutonomous: {
		type: String,
		required: true
	},
	collabShare: {
		type: String,
		required: true
	},
	collabCommunicate: {
		type: String,
		required: true
	},
	collabEmbodies: {
		type: String,
		required: true
	},

	supportingComments: {
		type: String,
		required: true
	}
});

// 3- export the schema as a Mongoose model
mongoose.model('PeerFeedback', PeerFeedbackSchema);
