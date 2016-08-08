'use strict';

angular.module('sugarsnaps').controller('DashboardCtrl', function(UserInfoService, $scope) {
	$scope.name = 'scott';
	$scope.user = UserInfoService.getFirstName();

});