'use strict';

function TruckDetailsController($state) {
}

angular.module('truckDetails')
.component('truckDetails',{
	templateUrl: 'truck-details/truck-details.template.html',
	controller:['$state', TruckDetailsController]
});