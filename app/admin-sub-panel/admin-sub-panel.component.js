'use strict';

function AdminSubPanelController($state) {
	var ctrl = this;
}

angular.module('adminSubPanel')
.component('adminSubPanel',{
	templateUrl: 'admin-sub-panel/admin-sub-panel.template.html',
	controller:['$state', AdminSubPanelController]
});