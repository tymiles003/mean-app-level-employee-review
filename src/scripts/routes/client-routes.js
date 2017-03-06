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
                .state('self-assess', {
                    url: '/reviews/self-assess',
                    templateUrl: 'views/self-assess-view.html',
                    // controller: 'selfAssessmentCtrl'
                })
                .state('manager-review', {
                    url: '/reviews/manager-review',
                    templateUrl: 'views/manager-review-view.html',
                    // controller: 'selfAssessmentCtrl'
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