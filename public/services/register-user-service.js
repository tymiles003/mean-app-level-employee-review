'use strict';

angular.module(ssApp).factory('UserInfoService', function() {
	return {
		// TODO: fetch data from backend
		// dummy data
		user: 'blah',
		title: 'ui developer',
		getFirstName: function() {
			return this.user;
		}
	};
});

