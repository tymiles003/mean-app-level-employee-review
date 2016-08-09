(function(){

	'use strict';

	angular.module(ssApp).controller('HalfwayCheckinCtrl', [ '$scope', '$http',
		function($scope, $http){

			// make object for form fields to be props of..
			$scope.halfwayFormInfo = {};

			$scope.saveHalfwayForm = function() {
				console.log('halfwayFormInfo includes...: ', JSON.stringify($scope.halfwayFormInfo));

				// test post to the web-server Express side
				$http.post('/perform-api/halfway', $scope.halfwayFormInfo)
					.then(
						// success callback
						function(response){
							$location.path('/goals');
						},
						// failure callback
						function(response){
							$location.path('/login');
						}
					);
			}
	}]);
})();
