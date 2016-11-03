describe('Login Controller', function() {
  var controller, scope;

  beforeEach(module('ui.router'));
  beforeEach(module('app.core'));
  beforeEach(module('app.login'));

  beforeEach(inject(function($controller){
    controller = $controller('LoginCtrl', {});
  }));

});
