'use strict';

function AdminPanelController($state) {
}

angular.module('adminPanel')
.component('adminPanel',{
	templateUrl: 'admin-panel/admin-panel.template.html',
	controller:['$state', AdminPanelController]
});