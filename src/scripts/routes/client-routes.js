(function(document, window, angular) {
    'use strict';

    var routes = function(ssApp) {
        angular.module(ssApp).config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/login');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: '/views/login-view.html',
                        controller: 'LoginCtrl'
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: 'views/register-view.html',
                        controller: 'RegCtrl'
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'views/dashboard-view.html',
                        controller: 'DashboardCtrl'
                    })
                    .state('dash-resources', {
                        url: '/dashboard/resources',
                        templateUrl: 'views/dashboard-resources-view.html'
                    })
                    .state('dash-archive', {
                        url: '/dashboard/archive',
                        templateUrl: 'views/dashboard-archive-view.html'
                    })
                    .state('goals', {
                        url: '/goals',
                        templateUrl: 'views/goals-view.html',
                        controller: 'GoalsCtrl'
                    })
                    .state('peer-feedback', {
                        url: '/peer-feedback',
                        templateUrl: 'views/peer-feedback-view.html',
                        controller: 'PeerFeedbackCtrl'
                    })
                    .state('halfway-checkin', {
                        url: '/reviews/halfway',
                        templateUrl: 'views/halfway-checkin-view.html',
                        controller: 'HalfwayCheckinCtrl'
                    })
                    .state('self-assess', {
                        url: '/reviews/self-assess',
                        templateUrl: 'views/self-assess-view.html',
                        controller: 'SelfAssessCtrl'
                    })
                    .state('annual-review', {
                        url: '/reviews/manager-review',
                        templateUrl: 'views/manager-review-view.html',
                        controller: 'ManagerReviewCtrl'
                    });
            }
        ]);
    };

    module.exports = routes;

})(document, window, angular);
