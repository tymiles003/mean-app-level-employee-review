(function(document, window, angular) {

	'use strict';

	var GoalsCtrl = function($scope, $http, $location, UserStorageService) {

		$scope.goalsFormInfo = {};

		// define form UI shortcut scope properties
		$scope.goalStatus = [
			'Not Started',
			'Behind Schedule',
			'On Track',
			'Completed'
		];

		$scope.getGoals = function(){
			$http.get('/perform-api/goal-get', {
				params: {
					currentUser: UserStorageService.currentUser
				}
			})
				.then(function(response){
					$scope.goalsFormInfo = response.data[0];
				});
		};

		$scope.saveGoals = function() {
			// add currentUser to the goalsFormInfo object before submitting
			$scope.goalsFormInfo.currentUser = UserStorageService.currentUser;
			// TODO: handle PUT here
			// send form data to the server and .then use a promise to process the response
			$http.post('/perform-api/goal-set', $scope.goalsFormInfo)
			 		.then(
			 			function(response) {
							$location.path('/dashboard');
			 		});
		};

		// call getGoals to get any saved goals for pre-fill
		$scope.getGoals();
	};

	module.exports = GoalsCtrl;

})(document, window, angular);
