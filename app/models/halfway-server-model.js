var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var HalfwaySchema = new Schema({
	// todo: write schema object props here

	empFirstName: {
		type: String,
		required: true
	},
	empLastName: {
		type: String,
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

mongoose.model('Halfway', HalfwaySchema);
