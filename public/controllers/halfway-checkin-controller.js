(function(){

	'use strict';

	angular.module(ssApp).controller('HalfwayCheckinCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location){

			// make object for form fields to be props of..
			$scope.halfwayFormInfo = {};

			//$scope.halfwayFormInfo.empFirstName = "BillyBob";

			// Save the entered form fields to the DB
			$scope.saveHalfwayForm = function() {
				console.log('halfwayFormInfo includes...: ', JSON.stringify($scope.halfwayFormInfo));

				// test post to the web-server Express side
				$http.post('/perform-api/halfway-set', $scope.halfwayFormInfo)
					.then(
						// success callback
						function(response){
							//$location.path('/goals'); 
						},
						// failure callback
						function(response){
							$location.path('/login');
						}
					);
			}

			var init = (function(){

				// v 0.5: do an $http.get('/perform-api/get-halfway')

				// v0.1: do hard-coded object
				$scope.halfwayFormInfo = {
				empFirstName : "Billy",
				empLastName : "Nicholas",
				manFirstName : "Kevin",
				manLastName : "So"
				};
			})();

	}]);
})();
