var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GoalSchema = new Schema({
	// todo: write schema object props here

	teamMemberFName: {
	type: String,
	required: true
	},
	teamMemberLName: {
		type: String,
		required: true
	},
	teamMemberTitle: {
		type: String,
		required: true
	},
	feedbackYear: {
		type: Number,
		required: true
	},
	memberManagerFName: {
		type: String,
		required: true
	},
	memberManagerLName: {
		type: String,
		required: true
	},
	resultGoalDueDateOne: {
		type: Date,
		required: true
	},
	resultGoalStatusOne: {
		type: Number,
		required: true
	},
	resultsGoalOne: {
		type: String,
		required: true
	},
	expertiseDueDateOne: {
		type: Date,
		required: true
	},
	expertiseGoalStatusOne: {
		type: Number,
		required: true
	},
	expertiseGoalOne: {
		type: String,
		required: true
	},
	collaborationGoalDueDateOne: {
		type: Date,
		required: true
	},
	collaborationGoalStatusOne: {
		type: Number,
		required: true
	},
	collaborationsGoalOne: {
		type: String,
		rquired: true
	},
});

mongoose.model('Goal', GoalSchema);
