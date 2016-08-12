process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Requiring dependencies
var mongoose = require('mongoose');

// Configure Mongoose
//var db = mongoose.connect('mongodb://localhost/mean-passport');
var db = mongoose.connect('mongodb://localhost/sugarsnaps21');

// Configure Express
var express = require('./config/express');
var app = express();

// Bootstrap passport config
var passport = require('./config/passport')();

// Bootstrap application
app.listen(3000);

// Tell developer about it
console.log('Server running at http://localhost:3000/');
