'use strict';

angular.module('sugarsnaps').controller('LogInCtrl', ['$scope',
	function($scope, UserInfoService) {
		$scope.logIn = function() {
			if($scope.logInForm.$invalid) {
				console.log('Please fill out the required fields');
				return;
			}else {
				location.assign("http://localhost:3000/#/dash-test");
			}
		};
	}
]);