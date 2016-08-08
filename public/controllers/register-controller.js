(function() {

	'use strict';

	angular.module(mainAppModuleName).controller('RegisterCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.formInfo = {}

			$scope.register = function(){
				$scope.firstName = JSON.stringify($scope.formInfo.firstname);

				if($scope.regForm.$invalid) {
					console.log('Please fill out the required fields');
					return;
				}else {
					console.log('Here is the form info: ' + JSON.stringify($scope.formInfo));
					location.assign("http://localhost:3000/#/dashboard");
				}
			}
		}
	]);
})();