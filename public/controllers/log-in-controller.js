'use strict';

angular.module('sugarsnaps').controller('LogInCtrl', ['$scope', '$http',
	function($scope, $http, UserInfoService) {
		$scope.logIn = function() {
			location.assign("http://localhost:3000/#/dash-test");
		};
	}
]);