(function() {
  'use strict';

  angular
    .module('app.service')
    .service('ReserveService', ReserveService);

  /* @ngInject */
  function ReserveService($http, RESOURCE, $firebaseArray) {

    this.init = init;
    this.getReserves = getReserves;
    this.createReserve = createReserve;
    var ref;
    var reserveList;

    function init() {
      ref = firebase.database().ref().child('reserves');
      reserveList = $firebaseArray(ref);
    }

    function getReserves() {
      return reserveList;
    }

    function createReserve(reserve) {
      reserveList.$add(reserve);
    }

  }

})();