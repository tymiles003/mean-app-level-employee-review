(function() {

	'use strict';

	angular.module(ssApp).controller('LogInCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.credentials = {};

			$scope.logIn = function() {
				console.log('Here is the credentials: ' + JSON.stringify($scope.credentials));
				$location.path('/dashboard');
				// $http.post('#', $scope.credentials)
				// 	.then(
				// 		// success callback
				// 		function(response) {
				// 			$location.path('/dashboard');
				// 		}
				// 	)
				// }
			}
		}
	]);
})();