(function(){

	'user strict';

	angular.module(ssApp).controller('LogInCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.credentials = {};
			console.log('hello from log in ctrl');

			$scope.logIn = function() {
				if($scope.logInForm.$invalid) {
					console.log('Please fill out the required fields');
					return;
				} else {
					console.log('Here is the form info: ' + JSON.stringify($scope.credentials));
					location.assign("http://localhost:3000/#/dashboard");
				}
			}
		}
	]);
})();