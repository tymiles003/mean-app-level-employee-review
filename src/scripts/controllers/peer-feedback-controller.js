/*
 * file: peer-feedback-controller.js
 */
(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // scope properties
        // TODO: use controller as syntax instead of $scope
        $scope.codename = 'Skunkworks Quicksilver';
        $scope.ratings = [
            'Not at All',
            'Sometimes',
            'Neutral',
            'Often',
            'Always'
        ];

        // TODO: move db post stuff from here into a data service
        $scope.submitFeedback = function() {
            console.log('pending form submission via $http.post...');

            $http.post('/perform-api/feedback-set', $scope.peerFormInfo) // needs a back-end route to tie to
                .then(
                    function(response) {
                        // process the response / re-load the $scope
                        $location.path('/dashboard');
                    }
                );



        };
    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
