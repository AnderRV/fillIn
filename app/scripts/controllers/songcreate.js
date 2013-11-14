'use strict';

angular.module('fillInApp')
  .controller('SongCreateCtrl', function ($scope, $location, Songs) {
    $scope.song = new Songs();

    $scope.save = function () {
      $scope.song.$save(function (song) {
        $location.path('/song/'+song._id);
      });
    };
  });
