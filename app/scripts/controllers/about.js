'use strict';

/**
 * @ngdoc function
 * @name sampleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleAppApp
 */
angular.module('sampleAppApp')
  .controller('AboutCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
/*   $scope.data = [{name : "Abdul Ahad",
age: 26,
dob: "16th December",
gender: "Male",
country: "India",
photoUrl: null,  
mobileNo: 7416858838,
ocupation:"Software Engineer",
url: null
},
{name : "Nitin Lavania",
age: 24,
dob: "15th December",
gender: "Male",
country: "India",
photoUrl: null,  
mobileNo: 7416858838,
ocupation:"Software Engineer",
url: null
},
{name : "Vilayath Hussian",
age: 28,
dob: "24th January",
gender: "Male",
country: "India",
photoUrl: null,  
mobileNo: 7416858838,
ocupation:"Account Manager",
url: null
},
{name : "Abdul Kabir",
age: 28,
dob: "28th November",
gender: "Male",
country: "India",
photoUrl: null,  
mobileNo: 7416858838,
ocupation:"Manager",
url: null
}];*/



      $scope.getUsers = function () {debugger;
        var userUrl = 'http://localhost:8080/api/users';
        return $http.get(userUrl)
          .then(function (respone) {debugger;
          $scope.usersInfo =  respone.data;
          });
      };

      $scope.init = function () {
      	 $scope.getUsers();
      };

      $scope.init();

  }]);

