'use strict';

angular.module('sugarsnaps').controller('LogInCtrl', ['$scope', '$http',
	function($scope, $http, UserInfoService) {
		$scope.logIn = function() {
			window.location.href = 'https://www.google.com/';
		};
	}
]);