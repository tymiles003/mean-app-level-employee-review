(function() {

	'use strict'

	angular.module(ssApp).controller('GoalsCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {

			$scope.goalsFormInfo = {};

			$scope.submit = function() {
				console.log('goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));

				// send form data to the server and .then use a promise to process the response
				$http.post('/perform-api/goals-set', $scope.goalsFormInfo)
					.then(
						function(response) {
							// process the response / re-load the $scope
							$location.path('/dashboard');
						}
					)
			};
		}
	]);
})();