'use strict';

angular.module('sugarsnaps').controller('DashCtrl', function(UserInfoService, $scope) {
	$scope.name = 'scott';
	$scope.user = UserInfoService.getFirstName();

});