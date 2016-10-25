angular.module('sampleAppApp')
  .controller('WatchCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {


  	$scope.moviesData = [
  	{ caption :"aye dil hai Mushkil",
  		imgUrl :"../images/adhm.jpg",
  		vedioUrl:" "
	},
	{ caption :"Force2",
  		imgUrl :"../images/force2.jpg",
  		vedioUrl:" "
	},{ caption :"Dhoni",
  		imgUrl :"../images/dhoni.jpg",
  		vedioUrl:" "
	},{ caption :"shivay",
  		imgUrl :"../images/shivay.jpg",
  		vedioUrl:" "
	}];


  }]);