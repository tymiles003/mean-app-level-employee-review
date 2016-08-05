'use strict'

angular.module('sugarsnaps').controller('GoalsCtrl', ['scope',
	function($scope) {
		console.log('goals controller here');

		// $scope.submit = function() {
		// 	// console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
		// 	// $scope.firstName = JSON.stringify($scope.formInfo.firstname);

		// 	if($scope.goalSetting.$invalid) {
		// 		console.log('Please fill out the required fields');
		// 		return;
		// 	}else {
		// 		location.assign("http://localhost:3000/#/dash-test");
		// 	}

		// };
	}
]);