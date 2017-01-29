'use strict';

angular.
  module('bathwaterApp').
  config(['$urlRouterProvider' ,'$stateProvider', '$httpProvider',
    function config($urlRouterProvider, $stateProvider, $httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('gSignIn',{
          url:'/',
          template: '<g-sign></g-sign>'
        })
        .state('index',{
          url:'/index',
          template: '<index></index>'
        })
        .state('adminPanel',{
          url:'/adminPanel',
          views:{
            '':{
              template:'<admin-panel></admin-panel>'
            },
            'tab@adminPanel':{
              template:'<admin-data></admin-data>'
            },
            'details@adminPanel':{
              template:'<driver></driver>'
            },
            'driverComponent@adminPanel':{
              template:'<driver-details></driver-details>'
            }
          }
        })
        .state('adminPanel.adminData',{
          url:'/adminData',
          template:'<admin-data></admin-data>'
        })
        .state('adminPanel.pickData',{
          url:'/pickupData',
          template:'<pickup-data></pickup-data>'
        })
        .state('adminPanel.drivers',{
          url:'/drivers',
          views:{
            'driverComponent@adminPanel':{
              template:'<driver-details></driver-details>'
            }
          }
        })
        .state('adminPanel.addDriver',{
          url:'/addDriver',
          views:{
            'driverComponent@adminPanel':{
              template:'<add-driver></add-driver>'
            }
          }
        })
        .state('adminPanel.trucks',{
          url:'/trucks',
          views:{
            'details@adminPanel':{
              template:'<truck-details></truck-details>'
            }
          }
        });
    }
  ]);
