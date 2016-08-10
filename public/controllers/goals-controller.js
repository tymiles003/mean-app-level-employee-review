(function() {

	'use strict'

	angular.module(ssApp).controller('GoalsCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {

			$scope.goalsFormInfo = {};

			$scope.submit = function() {
				console.log('goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));
				$location.path('/dashboard');
			};
		}
	]);
})();