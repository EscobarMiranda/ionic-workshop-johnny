(function() {
  'use strict';

  angular
    .module('app.createReserve')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('createReserve', {
        url: '/createReserve',
        templateUrl: 'app/create-reserve/create-reserve.html',
        controller: 'CreateReserveCtrl as vm'
      });

  }

})();
