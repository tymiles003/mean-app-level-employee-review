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


		$scope.prefillGoals = function(){
			$http.get('/perform-api/goal-get')
				.then(function(response){
					console.log(' the full RESPONSE: ', response);

					// get the form object fields by perhaps saving the response if it is the same object to the
					// TODO: assign the response object to the $scope.goalsFormInfo object -- if so, shouldn't form fields prefill
					$scope.goalsFormInfo = response.data[0];
				});
		};

		$scope.saveGoals = function() {
			console.log('inside saveGoals & here is goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));
			// send form data to the server and .then use a promise to process the response
			// make var for if goals submitted flag -- then check it and if true, use $http.put

			$http.post('/perform-api/goal-set', $scope.goalsFormInfo)

					.then(
					function(response) {
						// process the response / re-load the $scope
						console.log('got response back from goal-set server-side method and here is response: ', response);
						$location.path('/dashboard');
					}
				);
		};

	$scope.prefillGoals();

	};


	module.exports = GoalsCtrl;

})(document, window, angular);
