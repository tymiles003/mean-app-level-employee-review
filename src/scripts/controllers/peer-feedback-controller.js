(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // test scope property
        $scope.codename = 'Quicksilver';

        $scope.submitFeedback = function() {
            $location.path('/dashboard');
        };
    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
