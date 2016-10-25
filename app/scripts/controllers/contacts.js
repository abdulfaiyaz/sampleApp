angular.module('sampleAppApp')
  .controller('ContactsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
  $scope.tabledata = {
  	"data" :
	  	[
		    {
		        'name': 'student_name',
		        'values': 'abdul',
		        'designation': 'SE'
		    },
		    {
		    	'name': 'student_name',
		        'values': 'nitin',
		        'designation': 'SE'
		    },
		    {
		    	'name': 'student_name',
		        'values': 'nisar',
		        'designation': 'SSE'
		    }
		],
	"headersData" : [{name :"Student Name"}, {name: "Designation"}]
}


   $scope.tableDataTwo = [
      {
        'name': 'student_name',
        'values': [
          'abdul',
          'nitin',
          'nisar',
          'soma'
        ]
      },
      {
        'name': 'Designation',
        'values': [
          'SE',
          'SE',
          'SSE',
          'SSE'
        ]
      }
    ]
/*var modify = function(){
    angular.forEach($scope.tableDataTwo,function(value, index){

    });
}
modify();*/

  $scope.getUsers = function () {
        var userUrl = 'http://localhost:8080/api/users';
        return $http.get(userUrl)
          .then(function (respone) {
          $scope.usersInfo =  respone.data;
          });
      };

      $scope.init = function () {
      	 $scope.getUsers();
      };

      $scope.init();
  }]);