(function() {
  'use strict';

  angular
    .module('app.createReserve')
    .controller('CreateReserveCtrl', CreateReserveCtrl);

  /* @ngInject */
  function CreateReserveCtrl($ionicPopup, $state, ReserveService) {

    var vm = this;
    vm.reserve = {};
    vm.reserve.date = new Date();
    vm.createReserve = createReserve;

    activate();

    function activate() {
      
    }

    function createReserve() {
      ReserveService.createReserve(vm.reserve);
      vm.reserve = {};
      showAlert();
    }

    function showAlert() {
      var alertPopup = $ionicPopup.alert({
        title: 'Reserve created',
        template: 'Reserve created successfully'
      });

      alertPopup.then(function(res) {
        $state.go('main');
      });
    }
  }
})();
