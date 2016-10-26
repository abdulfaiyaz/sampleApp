'use strict';

/**
 * @ngdoc function
 * @name sampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAppApp
 */
angular.module('sampleAppApp')
  .controller('MainCtrl',['$scope', function ($scope) {

   $scope.signingDetails = [];

    $scope.login = function() {
    	$("#loginpage").modal('show');
    };

    $scope.signup = function() {
      $("#loginpage").modal('hide');
      $("#signinpage").modal('show');
    };

    $scope.confirmSignIn = function() {
          
    }
  }]);
