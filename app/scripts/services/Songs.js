'use strict';

angular.module('fillInApp')
  .factory('Songs', ['$resource', function ($resource) {
    return $resource('http://127.0.0.1::port/songs/:songId', {port: 3210, songId: '@_id'}, {});
  }]);