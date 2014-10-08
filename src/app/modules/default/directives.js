angular.module('app.default').
directive('fitHeight', function($window) {
   return function(scope, element) {

      angular.element(element).css({height:$window.innerHeight});

   };
});
