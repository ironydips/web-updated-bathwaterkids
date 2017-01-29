'use strict';

function AdminDataController($state) {
}

angular.module('adminData')
	.component('adminData',{
		templateUrl: 'admin-data/admin-data.template.html',
		controller:['$state', AdminDataController]
	});