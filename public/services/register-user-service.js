'use strict';

angular.module('sugarsnaps').factory('UserInfoService', function() {
	return {
		// TODO: fetch data from backend
		// dummy data
		user: 'blah',
		title: 'ui developer',
		getFirstName: function() {
			return this.user;
		}
	}
});683475

