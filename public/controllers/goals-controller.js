'use strict'

angular.module('sugarsnaps').controller('GoalsCtrl', ['$scope',
	function($scope) {

		$scope.userGoals = {};

		$scope.submit = function() {
			// console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
			// $scope.firstName = JSON.stringify($scope.formInfo.firstname);

			if($scope.userGoals.$invalid) {
				console.log('Please fill out the required fields');
				return;
			}else {
				console.log('regForm: ', JSON.stringify($scope.userGoals));
				location.assign("http://localhost:3000/#/dash-test");
			}

		};
	}
]);