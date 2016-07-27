'use strict';

angular.module('sugarsnaps').controller('RegisterCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.register = function() {
			console.log('registerCtrl working')
			// $scope.testName = 'scott'
		};
	}
]);