var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var HalfwaySchema = new Schema({	// Instatiate a NEW Halfway Schema -- db expects it
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
