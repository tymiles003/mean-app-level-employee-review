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
	}
	memberManagerFName: {
		type: String,
		required: true
	},
	memberManagerLName: {
		type: String,
		required: true
	},
	resultGoalDueDateOne: {
		type: String, //Number?
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
	resultGoalDueDateTwo: {
		type: String,  //Number?
		required: false
	},
	resultGoalStatusTwo: {
		type: String,
		required: false
	},
	resultsGoalTwo: {
		type: String,
		required: false
	},
	expertiseDueDateOne: {
		type: String, //Number?
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
	expertiseGoalDueDateTwo: {
		type: String,  //Number?
		required: false
	},
	expertiseGoalStatusTwo: {
		type: String,
		required: false
	},
	expertiseGoalTwo: {
		type: String,
		required: false
	},
	collaborationGoalDueDateOne: {
		type: String, //Number?
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
	collaborationGoalDueDateTwo: {
		type: String, //Number?
		required: true
	},
	collaborationGoalStatusTwo: {
		type: Number,
		required: true
	},
	collaborationsGoalTwo: {
		type: String,
		required: false
	}

});

mongoose.model('Goal', GoalSchema);
