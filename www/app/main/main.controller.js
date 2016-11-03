(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl(ReserveService) {

    var vm = this;
    vm.reserveList = ReserveService.getReserves;

    activate();

    function activate() {
      ReserveService.init();
    }

  }
})();
