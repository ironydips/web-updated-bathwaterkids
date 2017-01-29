'use strict';

function AddDriverController($state,$http) {
	var ctrl = this;
	ctrl.newDriver = {};
	ctrl.submit = function(){
		var dataString = angular.element("#createForm").serialize();

		$http({
			url: 'https://staging.bathwaterkids.com/rest/addDriver',
            method: "POST",
            data: dataString,
            headers: {
                'Authorization': "Basic YWRtaW46YWRtaW4=",
                "Content-Type": "application/x-www-form-urlencoded"
            }
		})
		.then(function(result){
			$state.go('adminPanel.drivers');
		})
		.catch(function(err){
			console.log('Error Adding Driver');
			console.log(err);
		});
	}
}

angular.module('addDriver')
	.component('addDriver',{
		templateUrl: 'add-driver/add-driver.template.html',
		controller:['$state','$http', AddDriverController]
	});