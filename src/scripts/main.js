var angular = require('angular');
var ngRoute = require('angular-route');
var ngMessages = require('angular-messages');
var ngAnimate = require('angular-animate');
var ngTouch = require('angular-touch');
var uiBootstrap = require('angular-ui-bootstrap');
var uiRouter = require('angular-ui-router');
var d3 = require('d3');
window.d3 = d3; // expose d3 as a global object for now to allow for d3 API access anywhere in the app


var routes = require('./routes/client-routes');

// include Ang Controller js files into the build
var RegCtrl = require('./controllers/register-controller');
var LogInCtrl = require('./controllers/login-controller');
var DashboardCtrl = require('./controllers/dashboard-controller');
var GoalsCtrl = require('./controllers/goals-controller');
var HalfwayCheckinCtrl = require('./controllers/halfway-checkin-controller');
var PeerFeedbackCtrl = require('./controllers/peer-feedback-controller');


// include Ang Service files into the build
var UserInfoService = require('./services/register-user-service');

// Define the main angular application module name
var ssApp = 'sugarsnaps';

// Define the main angular application module
var mainAppModule = angular.module(ssApp, ['ngRoute', 'ngMessages', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ui.router'])

	// Register Controllers for your App
	.controller('RegCtrl', ['$scope', '$http', '$location', RegCtrl])
	.controller('LogInCtrl', ['$scope', '$http', '$location', LogInCtrl])
	.controller('DashboardCtrl', ['$scope', DashboardCtrl])
	.controller('GoalsCtrl', ['$scope', '$http', '$location', GoalsCtrl])
	.controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location', HalfwayCheckinCtrl])
	.controller('PeerFeedbackCtrl', ['$scope', '$http', '$location', PeerFeedbackCtrl]);

	// Call the routes -- is this the best practice?
	routes(ssApp);

	// Init the AngularJS application
	angular.element(document).ready(function() {
		angular.bootstrap(document, [ssApp]);
		console.log('ssApp is bootstrapped');
	});

