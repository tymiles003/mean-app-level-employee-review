(function() {

	'use strict';

	angular.module(ssApp).controller('RegisterCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.registerFormInfo = {}

			$scope.register = function(){
				$scope.firstName = JSON.stringify($scope.registerFormInfo.firstname);
				console.log('Here is the registerFormInfo: ' + JSON.stringify($scope.registerFormInfo));
				$location.path('/dashboard');
			}
		}
	]);
})();