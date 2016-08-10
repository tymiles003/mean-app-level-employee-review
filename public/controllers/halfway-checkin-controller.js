(function(){

	'use strict';

	angular.module(ssApp).controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location){

			// make object for form fields to be props of..
			$scope.halfwayFormInfo = {};

			// Save the entered form fields to the DB -- called from form onSubmit
			$scope.saveHalfwayForm = function() {

				console.log('halfwayFormInfo includes...: ', JSON.stringify($scope.halfwayFormInfo));

				// test post to the web-server Express side
				$http.post('/perform-api/halfway-set', $scope.halfwayFormInfo)
					.then(
						function(response){
							// success callback ++ load up the local scope with values from the response
							$scope.halfwayFormInfo = {
								empFirstName : response.config.data.empFirstName,
								empLastName : response.config.data.empLastName,
								manFirstName : response.config.data.manFirstName,
								manLastName : response.config.data.manLastName
							}
							//$location.path('/dashboard');
						},
						function(response){
							// failure callback
							console.log('FAILURE');
							$location.path('/login');
						}
					);
			}

	}]);
})();
