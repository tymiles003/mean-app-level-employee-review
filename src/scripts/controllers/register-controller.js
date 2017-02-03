(function(document, window, angular) {
	'use strict';

	var RegCtrl = function($scope, $http, $location) {
		$scope.regFormInfo = {};

		$scope.register = function(){

			console.log($scope);
			console.log('Here is the regFormInfo: ' + JSON.stringify($scope.regFormInfo));

			// send form data to the server and .then use a promise to process the response
			$http.post('/perform-api/member-set', $scope.regFormInfo)
				.then(
					function(response) {
						// process the response / re-load the $scope
						console.log('Back from the server and here is the response... ', response);
						$location.path('/dashboard');
						// TODO: Add an alert to pass to the dashboard to tell users that feedback data has been solved
					}
				);
		};
	};

	module.exports = RegCtrl;

})(document, window, angular);

// app.controller('RegCtrl', ['$scope', '$stateParams', '$state', '$http', '$location', 
// 	$scope.regFormInfo = {};

// 	$scope.register = function(){

// 		console.log($scope);
// 		console.log('Here is the regFormInfo: ' + JSON.stringify($scope.regFormInfo));

// 		// send form data to the server and .then use a promise to process the response
// 		$http.post('/perform-api/member-set', $scope.regFormInfo) // set server route uri
// 			.then(
// 				function(response) {
// 					// process the response / re-load the $scope
// 					console.log('Back from the server and here is the response... ', response);
// 					$location.path('/dashboard');
// 				}
// 			);
// 	};

// ]);