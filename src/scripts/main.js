/*
 * main.js -- entry point for the quicksilver / sugarsnaps Angular app
 */

// include module files and 3p libs into the build - think of this as using .require() over a <script> call)
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
var LoginCtrl = require('./controllers/login-controller');
var RegCtrl = require('./controllers/register-controller');
var DashboardCtrl = require('./controllers/dashboard-controller');
var GoalsCtrl = require('./controllers/goals-controller');
var PeerFeedbackCtrl = require('./controllers/peer-feedback-controller');
var HalfwayCheckinCtrl = require('./controllers/halfway-checkin-controller');
var SelfAssessCtrl = require('./controllers/self-assess-controller');
var ManagerReviewCtrl = require('./controllers/manager-review-controller');

// include Ang Service js files into the build
// TODO: Create Data Service here

// include Ang Directive js files into the build
// TODO: Add Ninebox as a custom Directive here
var calendarWheelDirective = require('./directives/calendar-wheel-directive');

// Define the main angular application module name by var
var qsApp = 'quicksilver';

// Define the main angular application module and it's [] set of Dependencies
var mainAppModule = angular.module(qsApp, ['ngRoute', 'ngMessages', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ui.router', 'LocalStorageModule'])
	// Register Controllers for your App
	.controller('RegCtrl', ['$scope', '$http', '$location', RegCtrl])
	.controller('LoginCtrl', ['$scope', '$http', '$location', LoginCtrl])
	.controller('DashboardCtrl', ['$scope', DashboardCtrl])
	.controller('GoalsCtrl', ['$scope', '$http', '$location', GoalsCtrl])
	.controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location', HalfwayCheckinCtrl])
	.controller('PeerFeedbackCtrl', ['$scope', '$http', '$location', PeerFeedbackCtrl])
	.controller('ManagerReviewCtrl', ['$scope', '$http', '$location', ManagerReviewCtrl])
	.controller('SelfAssessCtrl', ['$scope', '$http', '$location', SelfAssessCtrl])

	// Register Services for your App

	// Register Directives for your App
	.directive('lvlCalendarWheel', calendarWheelDirective)

	// configure Local Storage as an angular .config
	.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
		localStorageServiceProvider
			.setPrefix(qsApp)
			.setStorageType('localStorage')
			.setDefaultToCookie(false)
			.setNotify(true, true);
		console.log('localStorageServiceProvider object: ', localStorageServiceProvider);
	}]);

	// Call the routes (there as a seond angular.config())
	routes(qsApp);

	// Initialize the AngularJS application
	angular.element(document).ready(function() {
		angular.bootstrap(document, [qsApp]);
		console.log('qsApp is bootstrapped');
	});
