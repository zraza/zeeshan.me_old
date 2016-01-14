angular.module('app', [
   'ngRoute',
   'duScroll',
   'app.default',
   //'zanbeel'
]).config(function($routeProvider, $locationProvider /*, $provide*/ ) {
   'use strict';
   // Use html5 push state for SEO friendly URL, DO NOT prefix URLs # while this is set to true, for non HTML5 browser, AngularJS will fallback to # automatically
   $locationProvider.html5Mode(true);

   // Uncommment following if you want to fallback to hash even for Hashtag compatible browsers, this is important, if you want to deply your application using phonegap and dont want to change URL to prefix them with hash.
   /*
		$provide.decorator('$sniffer', function($delegate) {
			$delegate.history = false;
			return $delegate;
		});
	*/

}).run(function($rootScope, $timeout) {
   'use strict';
   // This can be change in controller
   $rootScope.appPageTitle = 'Zeeshan Raza';
   // This will get page title from the defined routs
   $rootScope.$on('$routeChangeSuccess', function(event, current) {
      if (current.hasOwnProperty('$$route') && current.$$route.pageTitle) {
         $rootScope.appPageTitle = current.$$route.pageTitle;
      }
   });
   //$timeout(function() {
      $rootScope.loaded = true;
   //}, 5500)


});
