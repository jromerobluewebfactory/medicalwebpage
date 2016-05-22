; 'use strict';
(function (ngApp) {
  ngApp.app.config([
    '$routeProvider',
    'config',
    function ($routeProvider, config) {
      $routeProvider
        .when('/', {
          controller: 'LandingPageCtrl',
          templateUrl: (config.viewsSections + 'landingPage/index.html')
        })
        .otherwise({ redirectTo: '/' });
    }]);
})(ngApp);