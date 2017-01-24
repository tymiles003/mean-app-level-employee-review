(function(document, window, angular) {

    'use strict';

    var PeerFeedbackCtrl = function($scope, $http, $location) {

        $scope.peerFormInfo = {};

        // TODO: Setup an array for Ratings options to make it DRY, then use ng-repeat to put this in the view for peer feedback


        // test scope property for the view
        $scope.codename = 'Quicksilver';

        $scope.submitFeedback = function() {
            console.log('pending form submission...');

            $location.path('/dashboard');
        };
    };

    module.exports = PeerFeedbackCtrl;

})(document, window, angular);
