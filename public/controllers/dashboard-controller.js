'use strict';

angular.module('sugarsnaps').controller('DashboardCtrl', function(UserInfoService, $scope) {
	$scope.user = UserInfoService.getFirstName();
	$scope.name = 'Scott';

	// TODO: make it into a service
	var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var today = new Date();
	$scope.dd = today.getDate();
	$scope.mm = monthArray[today.getMonth()];
	$scope.yyyy = today.getFullYear();

});