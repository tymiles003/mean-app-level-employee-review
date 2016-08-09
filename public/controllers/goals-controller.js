'use strict'

angular.module(ssApp).controller('GoalsCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {

		$scope.goalsFormInfo = {};

		$scope.submit = function() {

			if($scope.goalSetting.$invalid) {
				console.log('Please fill out the required fields');
				return;
			}else {
				console.log('goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));
				location.path('/dashboard');
			}
		};
	}
]);