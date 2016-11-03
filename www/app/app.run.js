(function() {
  'use strict';

  angular
    .module('app')
    .run(run);

  /* @ngInject */
  function run($ionicPlatform, RESOURCE) {
    var config = {
      apiKey: RESOURCE.apiKey,
      authDomain: RESOURCE.authDomain,
      databaseURL: RESOURCE.databaseURL,
      storageBucket: RESOURCE.storageBucket,
      messagingSenderId: RESOURCE.messagingSenderId
    };
    firebase.initializeApp(config);
    
    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

    });
  }

})();
