(function(document, window, angular) {

	'use strict';

	var HalfwayCheckinCtrl = function($scope, $http, $location){

		// make object for form fields to be props of..
		$scope.halfwayFormInfo = {};

		// Save the entered form fields to the DB -- called from form onSubmit
		$scope.saveHalfwayForm = function () {
			console.log('pending halfway check in submission via $http.post...');

			$http.post('/perform-api/halfway-set', $scope.halfwayFormInfo)
				.then(
					function(response) {
						console.log('$scope.halfwayFormInfo: ', $scope.halfwayFormInfo)
						$location.path('/dashboard');
					}
				)
		};

		// go get the halfway data if it exists (use this for all review forms)
		// out of a fxn or within a fxn?

			/* 1/1x/2017 note: got UI up to speed but now doing http.get for the db values no longer working */

			// $http.get('/perform-api/halfway-get')
			// 	.then(function (response) {
			// 		console.log('got some response.data back', response);
			// 		console.log('here is the emp Name I got back:', response.data[0].empFirstName);
			// 		// load up the scope with the response
			// 		$scope.halfwayFormInfo = {
			// 			empFirstName: response.data[0].empFirstName,
			// 			empLastName: response.data[0].empLastName,
			// 			manFirstName: response.data[0].manFirstName,
			// 			manLastName: response.data[0].manLastName
			// 		};
			// 	});
	};

	module.exports = HalfwayCheckinCtrl;

})(document, window, angular);
