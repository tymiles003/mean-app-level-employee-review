'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.formInfo = {};

		$scope.register = function() {
			if($scope.userFrom.$valid) {
				console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
				location.assign("http://localhost:3000/#/dash-test");
			}

		};
	}
]);