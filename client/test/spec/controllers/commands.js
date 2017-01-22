'use strict';

describe('Controller: CommandsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CommandsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommandsCtrl = $controller('CommandsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommandsCtrl.awesomeThings.length).toBe(3);
  });
});
