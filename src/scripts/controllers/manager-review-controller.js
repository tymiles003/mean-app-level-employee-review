(function(document, window, angular) {

	'use strict';

	var ManagerReviewCtrl = function($scope, $http, $location){

		// make object for form fields to be props of..
		$scope.managerReviewFormInfo = {};

		// Save the entered form fields to the DB -- called from form onSubmit
		$scope.saveManagerReviewForm = function () {
			console.log('$scope.managerReviewFormInfo: ', $scope.managerReviewFormInfo);
			$location.path('/dashboard');
		};
	};

	module.exports = ManagerReviewCtrl;

})(document, window, angular);
