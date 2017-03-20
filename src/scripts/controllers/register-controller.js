(function(document, window, angular) {
	'use strict';

	var RegCtrl = function($scope, $http, $location) {

		$scope.regFormInfo = {};

		$scope.register = function(){

			console.log('Here is the regFormInfo: ' + JSON.stringify($scope.regFormInfo));

			// send form data to the server and .then use a promise to process the response
			$http.post('/perform-api/member-set', $scope.regFormInfo)
				.then(
					function(response) {
						// process the response / re-load the $scope
						console.log('Back from the server and here is the response... ', response);
						$location.path('/dashboard');
					}
				);
		};
	};

	module.exports = RegCtrl;

})(document, window, angular);
