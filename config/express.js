var express = require('express'),
    session = require('express-session'),
    path = require('path'),
    passport = require('passport');
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    flash = require('connect-flash'),

module.exports = function() {
    // Init express application == setup and return the app object
    var app = express();

    // Include server-side routing
    require('../app/routes/index-server-routes')(app);
    require('../app/routes/users-server-routes')(app);
    require('../app/routes/api-server-routes')(app);

    // Configure server models
    require('../app/models/user-server-model');
    require('../app/models/employee-server-model');
    require('../app/models/goal-server-model');
    require('../app/models/peer-feedback-server-model');
    require('../app/models/review-server-model');
    require('../app/models/halfway-server-model');

    // Use Express middlewares
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({
        secret: 'MEAN'
    }));

    // Set view engine
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'ejs');

    // Set up the public (client-side) folder for the app
    app.use(express.static(path.resolve('./public')));

    // Init Passport * for authentication *
    app.use(passport.initialize());
    app.use(passport.session());

	// Enable logger (morgan)
    app.use(morgan('dev'));

    // Connect flash for flash messages (que?)
    app.use(flash());


    return app;
};
