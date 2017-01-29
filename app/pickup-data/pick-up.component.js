'use strict';

function PickUpController($state) {
	
}

angular.module('pickUp')
.component('pickupData',{
	templateUrl: 'pickup-data/pick-up.template.html',
	controller:['$state', PickUpController]
});