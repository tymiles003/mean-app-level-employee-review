var angular = require('angular');
var ngRoute = require('angular-route');
var ngMessages = require('angular-messages');

var routes = require('./routes/client-routes');

var RegCtrl = require('./controllers/register-controller');
var LoginController = require('./controllers/login-controller');
var DashboardController = require('./controllers/dashboard-controller');
var GoalsController = require('./controllers/goals-controller');
var HalfwayCheckinController = require('./controllers/halfway-checkin-controller');
var UserInfoService = require('./services/register-user-service');


// // (function(document, window, angular) {
// 	'use strict';

	// Define the main angular application module name
	var ssApp = 'sugarsnaps';

	routes(ssApp);

	// console.log('hi');
	// console.log(RegCtrl);

	// Define the main angular application module
	var mainAppModule = angular.module(ssApp, ['ngRoute', 'ngMessages']);

	mainAppModule.controller('RegCtrl', ['$scope', '$http', '$location', RegCtrl]);

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
