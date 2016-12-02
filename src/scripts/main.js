var angular = require('angular');
var ngRoute = require('angular-route');
var ngMessages = require('angular-messages');
var ngAnimate = require('angular-animate');
var ngTouch = require('angular-touch');
var uiBootstrap = require('angular-ui-bootstrap');

var routes = require('./routes/client-routes');

var RegCtrl = require('./controllers/register-controller');
var LogInCtrl = require('./controllers/login-controller');
var DashboardCtrl = require('./controllers/dashboard-controller');
var GoalsCtrl = require('./controllers/goals-controller');
var HalfwayCheckinCtrl = require('./controllers/halfway-checkin-controller');
var UserInfoService = require('./services/register-user-service');


// // (function(document, window, angular) {
// 	'use strict';

	// Define the main angular application module name
	var ssApp = 'sugarsnaps';

	// Define the main angular application module
	var mainAppModule = angular.module(ssApp, ['ngRoute', 'ngMessages', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

	routes(ssApp);

	mainAppModule.controller('RegCtrl', ['$scope', '$http', '$location', RegCtrl]);
	mainAppModule.controller('LogInCtrl', ['$scope', '$http', '$location', LogInCtrl]);
	mainAppModule.controller('DashboardCtrl', [UserInfoService, '$scope', DashboardCtrl]);
	mainAppModule.controller('GoalsCtrl', ['$scope', '$http', '$location', GoalsCtrl]);
	mainAppModule.controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location', HalfwayCheckinCtrl]);

	//Configure application hashbang routing
	mainAppModule.config(['$locationProvider',
		function($locationProvider) {
			//$locationProvider.hashPrefix('!');
		}
	]);

	// Init the AngularJS application
	angular.element(document).ready(function() {
		angular.bootstrap(document, [ssApp]);
		console.log('ssApp is bootstrapped');
	});
// // })(document, window, angular);
