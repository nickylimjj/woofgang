'use strict';

describe('Controller: TransactionAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransactionAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionAddCtrl = $controller('TransactionAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransactionAddCtrl.awesomeThings.length).toBe(3);
  });
});
