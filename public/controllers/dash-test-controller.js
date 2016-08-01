'use strict';

// angular.module('sugarsnaps').factory('UserInfoService', [
// 	function() {
// 		var user = {
// 			name: 'scott kao',
// 			title: 'ui developer'
// 		};
// 		console.log(user.name);

// 		return {
// 			getFirstName: function() {
// 				return user.name;
// 			}
// 		}

// 	}
// ]);

// angular.module('sugarsnaps').controller('DashCtrl', ['$scope',
// 	function(UserInfoService) {
// 		// $scope.name = 'scott';
// 		console.log('WHAT: ', UserInfoService);
// 		// $scope.name = UserInfoService.getFirstNam();
// 	}
// ]);

// angular.module('sugarsnaps').factory('UserInfoService', function() {
// 	return {
// 		user: 'scott',
// 		title: 'ui developer',
// 		getFirstName: function() {
// 			return this.user;
// 		}
// 	}
// });

angular.module('sugarsnaps').controller('DashCtrl', function(UserInfoService, $scope) {
	$scope.name = 'scott'
	$scope.user = UserInfoService.user;

	console.log('huh: ', $scope.user, UserInfoService.getFirstName())
});