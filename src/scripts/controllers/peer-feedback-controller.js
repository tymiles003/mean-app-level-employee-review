(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // test scope property for the view
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
            console.log('pending form submission...');

            // send form data to the server and .then use a promise to process the response
            // // $http.post('', $scope.peerFormInfo) // needs a back-end route to tie to
            //     .then(
            //         function(response) {
            //             // process the response / re-load the $scope
            //             $location.path('/dashboard');
            //         }
            //     );



        };
    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
