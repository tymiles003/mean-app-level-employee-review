/*
 * file: express.js
 * purpose: the main server config file
 */
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function() {
    // Init express application
    var app = express();

    // Configure server models
    require('../app/models/user-server-model');
    require('../app/models/employee-server-model');
    require('../app/models/goal-server-model');
    require('../app/models/peer-feedback-server-model');
    //require('../app/models/review-server-model');
    require('../app/models/halfway-server-model');


    // Enable logger (morgan)
    app.use(morgan('dev'));

    // Use Express middlewares
    app.use(bodyParser.json()); // support json-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies (for forms)
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({
        secret: 'MEAN' // Que?
    }));

    // Set view engine
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'ejs');

    // Connect flash for flash messages
    app.use(flash());

    // Init Passport (for auth)
    app.use(passport.initialize());
    app.use(passport.session());

    // Configure server-side routing
    require('../app/routes/index-server-routes')(app);
    require('../app/routes/users-server-routes')(app);
    require('../app/routes/api-server-routes')(app);

    // Setting the app router and to the built front-end folder
    app.use(express.static(path.resolve('./dist')));

    return app;
};
