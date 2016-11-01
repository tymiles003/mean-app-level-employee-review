'use strict';

// Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            templateUrl: 'views/example-index.html',
            controller: 'IndexController'
        }).
        when('/signup', {
            templateUrl: 'views/example-signup.html',
            controller: 'AuthenticationController'
        }).
        when('/signin', {
            templateUrl: 'views/example-signin.html',
            controller: 'AuthenticationController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);