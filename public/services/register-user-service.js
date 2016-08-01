'use strict';

angular.module('sugarsnaps').factory('UserInfoService', function() {
	return {
		user: 'scott',
		title: 'ui developer',
		getFirstName: function() {
			return this.user;
		}
	}
});

