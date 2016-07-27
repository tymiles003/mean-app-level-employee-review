'use strict';

// Setting up route
angular.module('sugarsnaps').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            // controller: 'IndexController'
        })
        // .when('/signup', {
        //     templateUrl: 'views/example-signup.html',
        //     controller: 'AuthenticationController'
        // })
        // .when('/signin', {
        //     templateUrl: 'views/example-signin.html',
        //     controller: 'AuthenticationController'
        // })
        .when('/register', {
            templateUrl: 'views/register-view.html',
            controller: 'RegisterCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login-view.html',
            // controller: 'LogInCtrl'
        })
        .when('/dash-test', {
            templateUrl: 'views/dash-test-view.html',
            controller: 'DashCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);