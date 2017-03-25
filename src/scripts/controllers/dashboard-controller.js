(function(document, window, angular) {
	'use strict';

	var DashboardCtrl = function ($scope, UserStorageService) {

		// set name to the currentUser from the UserStorageService (+ do some hard-coded pretty print for name)
		// better as a js switch? -- or an array of users to loop thru?
		if (UserStorageService.currentUser === 'skao') {
			$scope.user = UserStorageService.currentUser;
			$scope.name = 'Scott Kao';
		} else if (UserStorageService.currentUser === 'mprior') {
			$scope.user = UserStorageService.currentUser;
			$scope.name = 'Megan Prior-Pfeiffer';
		} else if (UserStorageService.currentUser === 'wlorand') {
			$scope.user = UserStorageService.currentUser;
			$scope.name = 'Will Lorand';
		} else if (UserStorageService.currentUser === 'knagar') {
			$scope.user = UserStorageService.currentUser;
			$scope.name = 'Karen Nagar';
		} else {
			$scope.user = UserStorageService.currentUser; // TODO: needs default profile image to avoid broken image
			$scope.name = UserStorageService.currentUser;
		}

		var today = new Date();
		var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		// hard-coding date for goals demo
		$scope.dd = 27 // today.getDate();
		$scope.mm = 'September' // monthArray[today.getMonth()];
		$scope.yyyy = 2016 // today.getFullYear();

		// Alerts for Dashboard
		$scope.alerts = [
			{ type: 'success', icon: 'ok', msg: 'Hooray! You did it from js!' },
			{ type: 'info', icon: 'flag', msg: 'Hey, you should know this...from js' },
			{ type: 'warning', icon: 'exclamation-sign', msg: 'Uh-oh, you better be careful...from js' },
			{ type: 'danger', icon: 'fire', msg: 'HALP! HALP! Your website is on fire!!! from js' },
			{ type: 'success', icon: 'ok', msg: 'Hip hop Hooray! - SS Dashboard now includes UIB Dismissible Alerts!' },
		];

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

	};

	module.exports = DashboardCtrl;

})(document, window, angular);
