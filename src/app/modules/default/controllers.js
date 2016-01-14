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
         //avatar:'//media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/039/202/11960ab.jpg'
      },
      {
         who:'Tevis Paget',
         role:'Product Delivery Director at Orion Health',
         site:'https://www.linkedin.com/in/tevispaget',
         what:'Zeeshan is an all round technologist. He is a great developer and team manager. Someone who pushes the envelope in not just his team but the whole technical organisation. Zeeshan understands the balance between bleeding edge experimentation and the commercial need to deliver while providing the best technical solution. He cares about his team, the products he works on and their performance. Being ahead of the curve in the mobile and online space makes him a very valuable asset to any organisation wanting to deliver and deliver well.',
         //avatar:'//media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/00e/3fd/040df68.jpg'
      }
      ];
      //console.log($scope.testimonials);
   });
