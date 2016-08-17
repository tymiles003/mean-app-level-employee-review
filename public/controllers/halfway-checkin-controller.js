(function(){

	'use strict';

	angular.module(ssApp).controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location){

			// make object for form fields to be props of..
			$scope.halfwayFormInfo = {};

			// go get the halfway data if it exists (use this for all review forms)
			// out of a fxn or within a fxn?
			$http.get('/perform-api/halfway-get')
				.then(function(response){
					console.log('got some response.data back', response);
					console.log('here is the emp Name I got back:', response.data[0].empFirstName);
					// load up the scope with the response
					$scope.halfwayFormInfo = {
						empFirstName : response.data[0].empFirstName,
						empLastName : response.data[0].empLastName,
						manFirstName : response.data[0].manFirstName,
						manLastName : response.data[0].manLastName
					};
				});

			// Save the entered form fields to the DB -- called from form onSubmit
			$scope.saveHalfwayForm = function() {
				console.log('halfwayFormInfo includes...: ', JSON.stringify($scope.halfwayFormInfo));
				// post to the Express web-server
				// send form data to the server and .then use a promise to process the response
				$http.post('/perform-api/halfway-set', $scope.halfwayFormInfo)
					.then(
						function(response){
							console.log("Success!");
							// success callback ++ load up the local scope with values from the response
							//$scope.halfwayFormInfo = { // TODO: Find a DRY-er way to process the response
								// how about ng-repeat
							// 	empFirstName : response.config.data.empFirstName,
							// 	empLastName : response.config.data.empLastName,
							// 	manFirstName : response.config.data.manFirstName,
							// 	manLastName : response.config.data.manLastName
							// }
							$location.path('/dashboard');
							// need to pass notification data to the dashboard
						},
						function(response){  // is this failure case ever called??
							// failure callback
							console.log('FAILURE');
							$location.path('/login');
						}
					);
			};

	}]);
})();
