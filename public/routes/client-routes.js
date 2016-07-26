'use strict';

// Setting up route
angular.module('sugarsnaps').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
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
        // end example routing above
        when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        }).
        // when('/login', {
        //     templateUrl: 'views/login.html',
        //     controller: 'LogInCtrl'
        // }).
        otherwise({
            redirectTo: '/'
        });
    }
]);