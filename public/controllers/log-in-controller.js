(function(){
	'user strict';

	angular.module(mainAppModuleName).controller('LogInCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.credentials = {};
			console.log('hello from log in ctrl');

			$scope.logIn = function() {
				if($scope.logInForm.$invalid) {
					console.log('Please fill out the required fields');
					return;
				} else {
					console.log('Here is the form info: ' + JSON.stringify($scope.credentials));
					location.assign("http://localhost:3000/#/dashboard");
				}
			}
		}
	]);
})();
// 'use strict';

// angular.module('sugarsnaps').controller('LogInCtrl', ['$scope',
// 	function($scope, UserInfoService) {
// 		$scope.logIn = function() {
// 			if($scope.logInForm.$invalid) {
// 				console.log('Please fill out the required fields');
// 				return;
// 			}else {
// 				location.assign("http://localhost:3000/#/dashboard");
// 			}
// 		};
// 	}
// ]);