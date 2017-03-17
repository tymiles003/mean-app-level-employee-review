(function(document, window, angular) {

	'use strict';
console.log('yo');
	var SelfAssessCtrl = function($scope, $http, $location){
		// make object for form fields to be props of..
		$scope.selfAssessFormInfo = {};

		// Save the entered form fields to the DB -- called from form onSubmit
		$scope.saveSelfAssessForm = function () {
			console.log('$scope.selfAssessFormInfo: ', $scope.selfAssessFormInfo);
			$location.path('/dashboard');
		};
	};

	module.exports = SelfAssessCtrl;

})(document, window, angular);
