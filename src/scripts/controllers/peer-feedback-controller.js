(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // test scope property for the view
        $scope.codename = 'Quicksilver';

        $scope.submitFeedback = function() {
            console.log('pending form submission...');

            $location.path('/dashboard');
        };
    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
