(function(document, window, angular) {

	'use strict';

	var GoalsCtrl = function($scope, $http, $location) {

		$scope.goalsFormInfo = {};

		// goal status select options
		$scope.goalStatus = [
			'Not Started',
			'Behind Schedule',
			'On Track',
			'Completed'
		];

		$http.get('/perform-api/goal-get')
			.then(function(response){
				console.log(response);
			});

		$scope.saveGoals = function() {
			console.log('inside saveGoals & here is goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));
			// send form data to the server and .then use a promise to process the response
			$http.post('/perform-api/goal-set', $scope.goalsFormInfo)
				.then(
					function(response) {
						// process the response / re-load the $scope
						console.log('got response back from goal-set server-side method and here is response: ', response)
						//$location.path('/dashboard');
					}
				);
		};
	};

	module.exports = GoalsCtrl;

})(document, window, angular);
