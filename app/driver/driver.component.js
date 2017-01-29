'use strict';

function DriverController($state,$http) {
	var ctrl = this;
}

angular.module('driver')
	.component('driver',{
		templateUrl: 'driver/driver.template.html',
		controller:['$state','$http', DriverController]
	});