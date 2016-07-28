var mongoose = require('mongoose'),
	//crypto = require('crypto'),
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
		match: [/.+\@.+\..+/, "Please use a valid email address"]
	},
	lionLogin: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		validate: [
			function(password) {
				return password && password.length > 6;
			}, 'Password should be longer'
		]
	}
});

// Hook a pre save method to hash the password
// UserSchema.pre('save', function(next) {
// 	if (this.password) {
// 		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
// 		this.password = this.hashPassword(this.password);
// 	}

// 	next();
// });

// Create instance method for hashing a password
// UserSchema.methods.hashPassword = function(password) {
// 	if(password && this.salt) {
// 		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
// 	}
// };

// Create instance method for authenticating user
// UserSchema.methods.authenticate = function(password) {
// 	return this.password === this.hashPassword(password);
// };

mongoose.model('Employee', EmployeeSchema);
