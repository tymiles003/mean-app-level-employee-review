'use strict';

mainAppModule.service('UserService', [
	function() {
		var _this = this;

		_this.employee =  {
			id: //number,
			firstname: $scope.firstName
		}
		console.log('coming from service: ', _this.employee.firstname);
	}

]);
