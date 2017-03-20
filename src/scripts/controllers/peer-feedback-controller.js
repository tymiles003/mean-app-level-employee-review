/*
 * file: peer-feedback-controller.js
 */

(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // define form UI shortcut scope properties
        $scope.ratings = [
            'Not at All',
            'Sometimes',
            'Neutral',
            'Often',
            'Always'
        ];

        $scope.getFeedback = function() {
            $http.get('/perform-api/feedback-get')
                .then(function(response){
                    console.log(' the full Feedback RESPONSE: ', response);
                    // assign the response object to the $scope.peerFormInfo object to get form fields to prefill
                    $scope.peerFormInfo = response.data[0];
                });

        }

        $scope.submitFeedback = function() {
            $http.post('/perform-api/feedback-set', $scope.peerFormInfo)
                .then(
                    function(response) {
                        $location.path('/dashboard');
                    }
                );
        };

        // call getFeedback to get any saved feedbacks for pre-fill
        $scope.getFeedback();

    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
