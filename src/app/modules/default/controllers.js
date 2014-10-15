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
