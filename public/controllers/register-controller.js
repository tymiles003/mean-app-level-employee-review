'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.formInfo = {};

		$scope.register = function() {
			// console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
			// $scope.firstName = JSON.stringify($scope.formInfo.firstname);

			if($scope.regForm.$invalid) {
				console.log('Please fill out the required fields');
				return;
			}else {
				location.assign("http://localhost:3000/#/dash-test");
			}

		};
	}
]);