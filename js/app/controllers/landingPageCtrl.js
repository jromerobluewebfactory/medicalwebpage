; 'use strict';
(function (ngApp, $) {
  ngApp.controllers.controller('LandingPageCtrl', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {

      $timeout(function () {
        // initialize fullpage navigation
        $('#fullpage').fullpage({
          autoScrolling: false,
          controlArrows: false,
          css3: true,
          fitToSection: true,
          lockAnchors: true,
          slidesNavigation: false
        });
      });
      
      // move sections from menu
      $scope.moveTo = function (evt, slideIndex) {
        $('ul#nav-mobile li').removeClass('active');
        $(evt.target).parent().addClass('active');
        $.fn.fullpage.moveTo(0, slideIndex);
      };

    }]);
})(ngApp, jQuery);
