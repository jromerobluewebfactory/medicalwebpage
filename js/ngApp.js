; 'use strict';
var ngApp = (function (ng) {
  let controllers = ng.module('app.controllers', []);
  let directives = ng.module('app.directives', []);
  let services = ng.module('app.services', []);
  let app = ng.module('ngApp', [
    'ngRoute',
    'app.directives',
    'app.controllers',
    'app.services'
  ]);
  return {
    controllers: controllers,
    directives: directives,
    services: services,
    app: app
  };
})(angular);