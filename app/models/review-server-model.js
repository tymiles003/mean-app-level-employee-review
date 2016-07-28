var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	// todo: write schema object props here

	reviewPeriod: {
		type: Date,
		required: true
	}

});

mongoose.model('Review', ReviewSchema);
