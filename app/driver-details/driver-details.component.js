'use strict';

function DriverDetailsController($state,$http) {
	var ctrl = this;
	$http({
            url: 'https://staging.bathwaterkids.com/rest/getAllDrivers',
            method: "GET",
            headers: {
                'Authorization': "Basic YWRtaW46YWRtaW4="
            }
        })
		.then(function(driverDetails){
			ctrl.drivers = driverDetails.data;
		})
		.catch(function(err){
			console.log('Error getting driver details: ' + err);
		})
}

angular.module('driverDetails')
	.component('driverDetails',{
		templateUrl: 'driver-details/driver-details.template.html',
		controller:['$state','$http', DriverDetailsController]
	});