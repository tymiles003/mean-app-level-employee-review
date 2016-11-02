(function(document, window, angular) {
	'use strict';

	var UserInfoService = function() {
		return {
			// TODO: fetch data from backend
			// dummy data
			user: 'blah',
			title: 'ui developer',
			getFirstName: function() {
				return this.user;
			}
		};
	};

	module.exports = UserInfoService;

})(document, window, angular);
