var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PeerFeedbackSchema = new Schema({
	// todo: write schema object props here

	reviewPeriod: {
		type: Date,
		required: true
	}

});

mongoose.model('Feedback', PeerFeedbackSchema);
