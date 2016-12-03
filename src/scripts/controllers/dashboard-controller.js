(function(document, window, angular) {
	'use strict';

	var DashboardCtrl = function($scope) {
		$scope.name = 'Scott Prior-Pfeifer III';

		var today = new Date();
		var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		$scope.dd = today.getDate();
		$scope.mm = monthArray[today.getMonth()];
		$scope.yyyy = today.getFullYear();
	};

	module.exports = DashboardCtrl;

})(document, window, angular);