; 'use strict';
(function (ngApp, $) {
  ngApp.directives
    // dirMenu
    .directive('dirMenu', function (config) {
      return {
        link: function (scope, element, attrs) {
          // initialize sideNav
          $('.button-collapse').sideNav({
            //edge: 'right'
          });
        },
        templateUrl: (config.viewsDirectives + 'menu/index.html')
      };
    })
    // dirSlidehome
    .directive('dirSlidehome', function (config) {
      return {
        link: function (scope, element, attrs) {
          // initialize slide home
          $('#slider').responsiveSlides({
            speed: 1000,
            timeout: 4000
          });
        },
        templateUrl: (config.viewsSections + 'landingPage/slide/home.html')
      };
    });
})(ngApp, jQuery);