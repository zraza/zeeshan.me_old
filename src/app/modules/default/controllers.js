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

   }).controller('TestimonialCtrl', function($scope, $http) {
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
   });
