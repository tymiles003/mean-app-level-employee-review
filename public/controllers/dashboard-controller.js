'use strict';

angular.module('sugarsnaps').controller('DashboardCtrl', function(UserInfoService, $scope) {
	$scope.user = UserInfoService.getFirstName();
	$scope.name = 'Scott';

	var today = new Date();
	$scope.dd = today.getDate();
	$scope.mm = today.getMonth() + 1;
	$scope.yyyy = today.getFullYear();
	// console.log('Today: ' + mm + '/' + dd + '/' + yyyy);

});