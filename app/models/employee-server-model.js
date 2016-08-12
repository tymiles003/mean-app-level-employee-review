/*
 * employee-server-model.js  returns a mongoose model for use in ssApp Registration & Login
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	lionLogin: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	ssPassword: {
		type: String,
		required: true
	},
	confirmSsPassword: {
		type: String,
		required: true
	}
});

mongoose.model('Employee', EmployeeSchema);
