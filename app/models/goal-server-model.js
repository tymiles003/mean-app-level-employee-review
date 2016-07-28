var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GoalSchema = new Schema({
	// todo: write schema object props here

	reviewPeriod: {
		type: Date,
		required: true
	}

});

mongoose.model('Goal', GoalSchema);
