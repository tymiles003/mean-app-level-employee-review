(function(){

	'use strict';

	angular.module(ssApp).controller('LogInCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.credentials = {};

			$scope.logIn = function() {
				if($scope.logInForm.$invalid) {
					console.log('Please fill out the required fields');
					return;
				} else {
					console.log('Here is the credentials: ' + JSON.stringify($scope.credentials));
					$location.path('/dashboard');
				}
			}
		}
	]);
})();