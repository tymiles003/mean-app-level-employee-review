'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.formInfo = {};

		$scope.register = function() {
			console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
			console.log(JSON.stringify($scope.formInfo.firstname));
			$scope.firstName = JSON.stringify($scope.formInfo.firstname);
			location.assign("http://localhost:3000/#/dash-test");

		};
	}
]);