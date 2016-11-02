(function(document, window, angular) {

	'use strict';

	var GoalsCtrl = function($scope, $http, $location) {

		$scope.goalsFormInfo = {};

		$http.get('/perform-api/goal-get')
			.then(function(response){
				//console.log('got some response.data back', response);
				//var obj = $scope.goalsFormInfo;
				//console.log('here is the teamMemberFName I got back:', response.data[0].teamMemberFName);
				// if (Object.keys(obj).length === 0 && obj.constructor === Object) {
				// 	// empty form obj, so don't prefill
				// } else {
					// $scope.goalsFormInfo = {
					// 	resultsGoalOne: response.data[0].resultsGoalOne,
					// 	resultGoalDueDateOne: response.data[0].resultGoalDueDateOne,
					// 	resultGoalStatusOne: response.data[0].resultGoalStatusOne,
					// 	expertiseGoalOne: response.data[0].expertiseGoalOne,
					// 	expertiseGoalDueDateOne: response.data[0].expertiseGoalDueDateOne,
					// 	expertiseGoalStatusOne: response.data[0].expertiseGoalStatusOne,
					// 	collaborationsGoalOne: response.data[0].collaborationsGoalOne,
					// 	collaborationGoalDueDateOne: response.data[0].collaborationGoalDueDateOne,
					// 	collaborationGoalStatusOne: response.data[0].collaborationGoalStatusOne,
					// 	teamMemberFName : response.data[0].teamMemberFName,
					// 	teamMemberLName: response.data[0].teamMemberLName,
					// 	teamMemberTitle: response.data[0].teamMemberTitle,
					// 	feedbackYear: response.data[0].feedbackYear,
					// 	memberManagerFName: response.data[0].memberManagerFName,
					// 	memberManagerLName: response.data[0].memberManagerLName
					// };
				// }
			});


		$scope.submit = function() {
			console.log('goalsFormInfo: ', JSON.stringify($scope.goalsFormInfo));
			// send form data to the server and .then use a promise to process the response
			$http.post('/perform-api/goal-set', $scope.goalsFormInfo)
				.then(
					function(response) {
						// process the response / re-load the $scope
						$location.path('/dashboard');
					}
				);
		};
	};

	module.exports = GoalsCtrl;

})(document, window, angular);