(function(){

	'use strict';

	angular.module(mainAppModuleName).controller('HalfwayCheckinCtrl', [ '$scope', '$http',
		function($scope, $http){

			// make object for form fields to be props of..
			$scope.halfwayFormInfo = {};

			$scope.saveHalfwayForm = function() {
				console.log('halfwayFormInfo includes...: ', JSON.stringify($scope.halfwayFormInfo));
			}

		}]);
})();
