'use strict';

angular.
  module('bathwaterApp').
  run(['GAuth','$http', '$state', function(GAuth, $http, $state){
    var CLIENT = '531188035829-e83na2d4nj50fu7baqc7q7mlqauboqvs.apps.googleusercontent.com';
    GAuth.setClient(CLIENT);
    GAuth.load();

    GAuth.checkAuth().then(
            function (profile) {
                var params = JSON.stringify({
                              email: profile.email,
                              name: profile.name  
                          });

                $http.post("https://staging.bathwaterkids.com/rest/oauth/login",params)
                .then(function (data) {
                    if (data.data.message != 'success') {
                        $state.go('gSignIn');
                    }
                })
                .catch(function(err){
                  console.log('Error on Oauth Login!!' + err);
                });
                $state.go('index');
            },
            function(){
              $state.go('gSignIn');
            }
        );
  }]);