'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.register = function() {
			if($scope.userFrom.$valid) {
				alert('form validated');
				location.assign("http://localhost:3000/#/dash-test");
			}
		};
	}
]);