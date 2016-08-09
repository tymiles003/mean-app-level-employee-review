
'use strict';

// Define the main angular application module name
var ssApp = 'sugarsnaps';

// Define the main angular application module
var mainAppModule = angular.module(ssApp, ['ngRoute', 'ngMessages']);

//Configure application hashbang routing
mainAppModule.config(['$locationProvider',
   function($locationProvider) {
       //$locationProvider.hashPrefix('!');
   }
]);

// Init the AngularJS application
angular.element(document).ready(function() {
   angular.bootstrap(document, [ssApp]);
});
