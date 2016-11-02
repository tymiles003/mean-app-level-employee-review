(function(document, window, angular) {
	'use strict';

	var LogInCtrl = function($scope, $http, $location) {
		$scope.credentials = {};

		$scope.logIn = function() {
			// console.log('Here is the credentials: ' + JSON.stringify($scope.credentials));
			$location.path('/dashboard');
			// $http.post('#', $scope.credentials)
			// 	.then(
			// 		// success callback
			// 		function(response) {
			// 			$location.path('/dashboard');
			// 		}
			// 	)
			// }
		};
	};

	module.exports = LogInCtrl;
})(document, window, angular);