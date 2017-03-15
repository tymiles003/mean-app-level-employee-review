(function(document, window, angular) {
	'use strict';

	var LoginCtrl = function($scope, $http, $location) {
		$scope.credentials = {};

		$scope.loginUser = function() {
			// console.log('Here is the credentials: ' + JSON.stringify($scope.credentials));
			$location.path('/dashboard');
		};
	};

	module.exports = LoginCtrl;

})(document, window, angular);
