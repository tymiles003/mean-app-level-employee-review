(function(document, window, angular) {
    'use strict';

    // Client Routing for SugarSnaps
    var routes = function(ssApp) {
        angular.module(ssApp).config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                .when('/', {
                    redirectTo: '/login'
                })
                .when('/register', {
                    templateUrl: 'views/register-view.html',
                    controller: 'RegCtrl'
                })
                .when('/login', {
                    templateUrl: '/views/login-view.html',
                    controller: 'LogInCtrl'
                })
                .when('/dashboard', {
                    templateUrl: 'views/dashboard-view.html',
                    controller: 'DashboardCtrl'
                })
                .when('/goals', {
                    templateUrl: 'views/goals-view.html',
                    controller: 'GoalsCtrl'
                })
                .when('/reviews/halfway', {
                    templateUrl: 'views/halfway-checkin-view.html',
                    controller: 'HalfwayCheckinCtrl'
                })
                .when('/peer-feedback', {
                     templateUrl: 'views/peer-feedback-view.html',
                     controller: 'PeerFeedbackCtrl'
                 })
                // .when('/reviews/self', {
                //     templateUrl: 'views/self-assess-view.html',
                //     controller: 'SelfAssessCtrl'
                // })
                // .when('/reviews/annual', {
                //     templateUrl: 'views/annual-perform-view.html',
                //     controller: 'AnnualPerformCtrl'
                // });
                .otherwise({
                    redirectTo: '/login'
                });
            }
        ]);
    };

    module.exports = routes;
})(document, window, angular);
