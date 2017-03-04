(function(document, window, angular) {
    'use strict';

    var routes = function(ssApp) {
        angular.module(ssApp).config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/login');
                $stateProvider
                    .state('register', {
                    url: '/register',
                    templateUrl: 'views/register-view.html',
                    controller: 'RegCtrl'
                })
                    .state('login', {
                    url: '/login',
                    templateUrl: '/views/login-view.html',
                    controller: 'LogInCtrl'
                })
                    .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'views/dashboard-view.html',
                    controller: 'DashboardCtrl'
                })
                    .state('resources', {
                    url: '/dashboard/resources',
                    templateUrl: 'views/dashboard-resources-view.html',
                    // controller: 'DashboardCtrl'
                })
                    .state('goals', {
                    url: '/goals',
                    templateUrl: 'views/goals-view.html',
                    controller: 'GoalsCtrl'
                })
                    .state('halfway', {
                    url: '/reviews/halfway',
                    templateUrl: 'views/halfway-checkin-view.html',
                    controller: 'HalfwayCheckinCtrl'
                })
                    .state('peer-feedback', {
                    url: '/peer-feedback',
                    templateUrl: 'views/peer-feedback-view.html',
                    controller: 'PeerFeedbackCtrl'
                });
            }
        ]);

    };

    module.exports = routes;
})(document, window, angular);