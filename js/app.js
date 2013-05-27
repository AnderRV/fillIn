'use strict';

// Declare app level module which depends on filters, and services
angular.module('fillIn', ['fillIn.filters']). // , 'myApp.services', 'myApp.directives'
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        when('/songlist', {templateUrl: 'partials/songlist.html', controller: SongsCtrl}).
        when('/song/:itemId', {templateUrl: 'partials/song.html', controller: SongCtrl}).
        otherwise({redirectTo: '/songlist'});
  }]);