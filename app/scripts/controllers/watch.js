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
	}, { caption :"aye dil hai Mushkil",
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

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

  }]);