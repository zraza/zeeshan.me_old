angular.module('app.default', [])
	.config(function($routeProvider) {
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
	});
angular.module('app.default')
	.controller('ListCtrl', function($scope,$http) {
		'use strict';

		$http.get('/assets/data/sessions.json').then(function(res){
			$scope.items = res.data;
		});


		//$scope.items = ['a','b','c','d','aa','bb','cc','dd'];

	});

angular.module('app.default')
	.controller('ErrorCtrl', function() {
		'use strict';

	});

angular.module('app.default').
directive('fitHeight', function($window) {
   return function(scope, element) {

      angular.element(element).css({height:$window.innerHeight});

   };
});

angular.module('app.default')
   .controller('WorkCtrl', function($scope, $http) {
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
         preview: '/assets/img/work/capacitymagazine.png',
         title: 'Structured Retail Products',
         what: 'Design, Development'
      }, {
         preview: '/assets/img/work/srp.png',
         title: 'Structured Retail Products',
         what: 'Design, Development'
      }, {
         preview: '/assets/img/work/london-now.png',
         title: 'London Now',
         what: 'Design, Branding, Concept, Development'
      }, {
         preview: '/assets/img/work/quotesbee.png',
         title: 'QuotesBee',
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

   }).controller('TestimonialCtrl', function($scope, $http) {
      'use strict';

      $scope.testimonials = [{
         who:'David Perez',
         role:'Head of Technology',
         site:'https://www.linkedin.com/profile/view?id=6465184',
         what:'I have been working with Zeeshan for over 5 years. He joined SRP as a Senior Developer and then was promoted to Development Manager at Euromoney Institutional for his exemplary skills set both in technologies and team lead. He understands all the different facets of a great digital product, with a thirst for solving complex problems & then great product delivery, with attention to details.  He leads by example, is very hands-on, his team respect his expertise, his commitment to great work delivery and his passion for technologies - always ready to test the next best thing and find a practical application at work. ',
         avatar:'//media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/039/202/11960ab.jpg'
      },
      {
         who:'Marina Carbone',
         role:'Head of Digital Product Development & Marketing',
         site:'https://www.linkedin.com/profile/view?id=41761680',
         what:'Zeeshan is a hands-on dev. manager who can both instinctively understand and articulate requirements (even when they\'re not presented in the tightest of tech talk) as well as code to produce killer results. Zeeshan is passionate about product and technology, manages to code both beautiful and quick, and is an absolute pleasure to work with!',
         avatar:'//media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/00e/3fd/040df68.jpg'
      }
      ];
      //console.log($scope.testimonials);
   });

angular.module('app', [
   'ngRoute',
   'duScroll',
   'app.default',
   'zanbeel'
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
