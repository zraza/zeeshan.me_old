angular.module('app.default', [])
	.config(["$routeProvider", function($routeProvider) {
		'use strict';
		$routeProvider
			.when('/404', {
				controller:'ErrorCtrl',
				templateUrl: '/app/modules/default/views/404.html',
				pageTitle:'Page not Found'
			}).when('/a', {
				controller:'ListCtrl',
				pageTitle:'a',
				templateUrl: '/app/modules/default/views/a.html'
			}).when('/b', {
				pageTitle:'b',
				templateUrl: '/app/modules/default/views/b.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}]);
angular.module('app.default')
	.controller('ListCtrl', ["$scope", "$http", function($scope,$http) {
		'use strict';

		$http.get('/assets/data/sessions.json').then(function(res){
			$scope.items = res.data;
		});


		//$scope.items = ['a','b','c','d','aa','bb','cc','dd'];

	}]);

angular.module('app.default')
	.controller('ErrorCtrl', function() {
		'use strict';

	});

angular.module('app.default').
directive('fitHeight', ["$window", function($window) {
   return function(scope, element) {

      angular.element(element).css({height:$window.innerHeight});

   };
}]);

angular.module('app.default')
   .controller('WorkCtrl', ["$scope", "$http", function($scope, $http) {
      'use strict';

      $scope.works = [{
         preview: '/assets/img/work/poemish.png',
         title: 'Poemish',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/trulylovable.png',
         title: 'TrulyLovable',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/truewhisper.png',
         title: 'TrueWhisper',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/london-now.png',
         title: 'London Now',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/inspirational-cards.png',
         title: 'Inspirational Cards',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/naat.png',
         title: 'Naat',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/london-now.png',
         title: 'London Now',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/inspirational-cards.png',
         title: 'Inspirational Cards',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/naat.png',
         title: 'Naat',
         what: 'Design, Branding, Concept, Development'
      }];

   }]).controller('TestimonialCtrl', ["$scope", "$http", function($scope, $http) {
      'use strict';

      $scope.testimonials = [{
      	who:'Marina Carbone',
      	what:'Zeeshan is a hands-on dev. manager who can both instinctively understand and articulate requirements (even when they\'re not presented in the tightest of tech talk) as well as code to produce killer results. Zeeshan is passionate about product and technology, manages to code both beautiful and quick, and is an absolute pleasure to work with!',
      	avatar:''
      },{
         who:'David Perez',
         what:'Zeeshan is a hands-on dev. manager who can both instinctively understand and articulate requirements (even when they\'re not presented in the tightest of tech talk) as well as code to produce killer results. Zeeshan is passionate about product and technology, manages to code both beautiful and quick, and is an absolute pleasure to work with!',
         avatar:''
      }
      ];
      //console.log($scope.testimonials);
   }]);

angular.module('app', [
   'ngRoute',
   'duScroll',
   'app.default'
]).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider /*, $provide*/ ) {
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

}]).run(["$rootScope", "$timeout", function($rootScope, $timeout) {
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


}]);

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/app/modules/default/views/404.html',
    'Page not found :)');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/app/modules/default/views/a.html',
    '<section id="listing"><ul><li ng-repeat="item in items"><img src="http://i4.ytimg.com/vi/{{item.thumbnail}}/0.jpg"><div class="detail"><h4>{{item.title}}</h4><p>{{item.topics.join(\', \')}}</p></div></li></ul></section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/app/modules/default/views/b.html',
    'b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>ssssb<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>b<br>');
}]);
})();
