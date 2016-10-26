'use strict';
angular.module('sampleAppApp').directive('carouselSlideButton', [function () {
   return {
     restrict : 'A',
     link: function (scope, element, attr) {
       element.click(function(){
         var slideDirection = element.hasClass('left') ? 'prev' : 'next';
         angular.element('#'+attr.carouselSlideButton).carousel(slideDirection);
       });
     }
   };
}]);