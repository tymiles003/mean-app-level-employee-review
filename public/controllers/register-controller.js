'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.register = function() {
			console.log('You hit register!');
			location.assign("http://localhost:3000/#/dash-test");
		};
	}
]);