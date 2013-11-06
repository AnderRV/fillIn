'use strict';

describe('Controller: SonglistCtrl', function () {
  var $httpBackend,
    $rootScope,
    createController;

  // load the controller's module
  beforeEach(module('fillInApp'));

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');

    // backend definition common for all tests
    $httpBackend.when('GET', 'fakedata/songs.json').
      respond(
        [{
          "id" : 1,
          "band": "TestBand",
          "name": "Test Song Name",
          "label": "test_label"
        },
        {
          "id" : 2,
          "band": "TestBand2",
          "name": "Test Song Name 2",
          "label": "test_label_2"
        }]
      );

    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('SonglistCtrl', {
        '$scope' : $rootScope
      });
    };
  }));

  // Initialize the controller and a mock scope
  // beforeEach(inject(function ($controller, $rootScope) {
  //   scope = $rootScope.$new();
  //   SonglistCtrl = $controller('SonglistCtrl', {
  //     $scope: scope
  //   });
  // }));

  // TODO generate REAL tests

  it('should get a song list', function () {
    var controller = createController();
    $httpBackend.flush();

    $httpBackend.expectGET('fakedata/songs.json');
    expect($rootScope.songs.length).toBe(2);
    expect($rootScope.songs[0].name).toBe("Test Song Name");
    expect($rootScope.songs[1].band).toBe("TestBand2");
  });
});