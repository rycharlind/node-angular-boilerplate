(function () {
  'use strict';

  angular.module('rgilityCSA', [
    'ngRoute',
    'ngMessages',
    'ngMaterial'
  ]);

  var rootElement = document.getElementsByTagName('html')[0];

  angular.element(rootElement).ready(function bootstrapApp() {
    angular.bootstrap(rootElement, ['rgilityCSA']);
  });

})();
