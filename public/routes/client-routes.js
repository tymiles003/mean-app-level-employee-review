
'use strict';

// Setting up route
angular.module('sugarsnaps').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider
        .when('/', {
            templateUrl: 'views/index.html'
            //controller: 'IndexController'
        })
        .when('/register', {
            templateUrl: 'views/register-view.html',
            controller: 'RegisterCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login-view.html',
            controller: 'LogInCtrl'
        })
        .when('/dash-test', {
            templateUrl: 'views/dash-test-view.html',
            controller: 'DashCtrl'
        })
        .when('/goals', {
            //templateUrl: 'views/goals-view.html',
            //controller: 'GoalsCtrl'
        })
        .when('/peer-feedback', {
            //templateUrl: 'views/peer-feedback-view.html',
            //controller: 'PeerFeedbackCtrl'
        })
        .when('/reviews/halfway', {
            //templateUrl: 'views/halfway-checkin-view.html',
            //controller: 'HalfwayCheckinCtrl'
        })
        .when('/reviews/self', {
            //templateUrl: 'views/self-assess-view.html',
            //controller: 'SelfAssessCtrl'
        })
        .when('/reviews/annual', {
            //templateUrl: 'views/annual-perform-view.html',
            //controller: 'AnnualPerformCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
    }
]);