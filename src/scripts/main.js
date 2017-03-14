/*
 * main.js -- entry point for the quicksilver / sugarsnaps Angular app
 */

// include module files and 3p libs into the build
var angular = require('angular');
var ngRoute = require('angular-route');
var ngMessages = require('angular-messages');
var ngAnimate = require('angular-animate');
var ngTouch = require('angular-touch');
var uiBootstrap = require('angular-ui-bootstrap');
var uiRouter = require('angular-ui-router');
var ngLocalStorage = require('angular-local-storage');
var d3 = require('d3');
window.d3 = d3; // expose d3 as a global object for now to allow for d3 API access anywhere in the app

// include Ang Routes .js file into the build
var routes = require('./routes/client-routes');

// include Ang Controller js files into the build
var RegCtrl = require('./controllers/register-controller');
var LogInCtrl = require('./controllers/login-controller');
var DashboardCtrl = require('./controllers/dashboard-controller');
var GoalsCtrl = require('./controllers/goals-controller');
var HalfwayCheckinCtrl = require('./controllers/halfway-checkin-controller');
var PeerFeedbackCtrl = require('./controllers/peer-feedback-controller');
var ManagerReviewCtrl = require('./controllers/manager-review-controller');



// include Ang Service js files into the build

// include Ang Directive js files into the build
var calendarWheelDirective = require('./directives/calendar-wheel-directive');

// Define the main angular application module name
var ssApp = 'sugarsnaps';

// Define the main angular application module
var mainAppModule = angular.module(ssApp, ['ngRoute', 'ngMessages', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ui.router', 'LocalStorageModule'])
	// Register Controllers for your App
	.controller('RegCtrl', ['$scope', '$http', '$location', RegCtrl])
	.controller('LogInCtrl', ['$scope', '$http', '$location', LogInCtrl])
	.controller('DashboardCtrl', ['$scope', DashboardCtrl])
	.controller('GoalsCtrl', ['$scope', '$http', '$location', GoalsCtrl])
	.controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location', HalfwayCheckinCtrl])
	.controller('PeerFeedbackCtrl', ['$scope', '$http', '$location', PeerFeedbackCtrl])
	.controller('ManagerReviewCtrl', ['$scope', '$http', '$location', ManagerReviewCtrl])

	// Register Services for your App

	// Register Directives for your App
	.directive('lvlCalendarWheel', calendarWheelDirective);

	// Call the routes (as config())
	routes(ssApp);

	// Init the AngularJS application
	angular.element(document).ready(function() {
		angular.bootstrap(document, [ssApp]);
		console.log('ssApp is bootstrapped');
		console.log('ngLocalStorage: ', ngLocalStorage);
	});
