'use strict';

describe('Controller: TransactionDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransactionDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionDeleteCtrl = $controller('TransactionDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransactionDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
