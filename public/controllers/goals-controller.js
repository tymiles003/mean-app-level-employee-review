'use strict'

angular.module('sugarsnaps').controller('GoalsCtrl', ['$scope',
	function($scope) {

		$scope.userGoals = {};

		$scope.submit = function() {

			if($scope.goalSetting.$invalid) {
				console.log('Please fill out the required fields');
				return;
			}else {
				console.log('regForm: ', JSON.stringify($scope.userGoals));
				location.assign("http://localhost:3000/#/dashboard");
			}
		};
	}
]);