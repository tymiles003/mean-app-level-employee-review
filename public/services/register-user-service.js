'use strict';

angular.module('sugarsnaps').factory('UserInfoService', function() {
	return {
		user: 'blah',
		title: 'ui developer',
		getFirstName: function() {
			return this.user;
		}
	}
});

