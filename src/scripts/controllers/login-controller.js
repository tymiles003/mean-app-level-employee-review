(function(document, window, angular) {
	'use strict';

	var LoginCtrl = function($scope, $http, $location, UserStorageService) {

		$scope.loginFormInfo = {};

		$scope.loginUser = function() {

			// 0- debug log some stuffs
			console.log('Here is the loginFormInfo: ' + JSON.stringify($scope.loginFormInfo));
			console.log('UserStorageService is: ', UserStorageService); // should be an object

			// 1- set the currentUser in the service based on login string (demo hard-coded to skao, mprior, willoran)
			UserStorageService.currentUser = $scope.loginFormInfo.userLogin;

			console.log('currentUser is now: ', UserStorageService.currentUser);

			// get thee to the dashboard
			$location.path('/dashboard');
		};
	};

	module.exports = LoginCtrl;

})(document, window, angular);
