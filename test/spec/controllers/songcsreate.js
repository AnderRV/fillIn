'use strict';

describe('Controller: SongCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('fillInApp'));

  var SongCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongCreateCtrl = $controller('SongCreateCtrl', {
      $scope: scope
    });
  }));

//  it('should exist save function in scope', function () {
//    expect(scope.save).not.toThrow();
//  });
});
