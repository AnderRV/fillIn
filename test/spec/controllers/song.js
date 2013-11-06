'use strict';

describe('Controller: SongCtrl', function () {
  var $httpBackend,
    $rootScope,
    createController;

  // load the controller's module
  beforeEach(module('fillInApp'));

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');

    // backend definition common for all tests
    $httpBackend.when('GET', 'fakedata/song1.json').
      respond(
        {
          "id" : 1,
          "band": "TestBand",
          "name": "Test Song Name",
          "desc": "Test content with <input type=\"text\" value=\"\" data-result=\"result\" />"
        }
      );

    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('SongCtrl', {
        '$scope' : $rootScope,
        '$routeParams' : {'itemId': 1}
      });
    };
  }));

  // afterEach(function() {
  //   $httpBackend.verifyNoOutstandingExpectation();
  //   $httpBackend.verifyNoOutstandingRequest();
  // });

  // Initialize the controller and a mock scope
  // beforeEach(inject(function ($controller, $rootScope) {
  //   scope = $rootScope.$new();
  //   SongCtrl = $controller('SongCtrl', {
  //     $scope: scope
  //   });
  // }));

  // TODO generate REAL tests

  it('should get a song', function () {
    var controller = createController();
    $httpBackend.flush();

    $httpBackend.expectGET('fakedata/song1.json');
    expect($rootScope.song.name).toBe("Test Song Name");
    expect($rootScope.song.band).toBe("TestBand");
    expect($rootScope.$root.pageTitle).toBe("Test Song Name");
  });
});
