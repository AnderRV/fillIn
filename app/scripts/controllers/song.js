'use strict';

angular.module('fillInApp')
  .controller('SongCtrl', function ($scope, $routeParams, $http, $location, Songs) {
    Songs.get(
      {
        songId: $routeParams.itemId
      }, function (song) {
        $scope.song = song;
        $scope.$root.pageTitle = $scope.song.name;
      }, function () {
        // TODO handle error
        $location.path('/songlist');
      });

    $scope.correct = function ($event) {
      $event.preventDefault();

      var lyrics, inputs, inputCount, result, input, correct, inputCorrect;

      lyrics = $('#lyrics');
      inputs = lyrics.find('input');
      inputCount = inputs.length;
      result = $('#result');

      correct = true;
      inputCorrect = 0;

      inputs.each(function() {
        input = $(this);
        if(input.val().toLowerCase() === input.data('result').toString().toLowerCase()) {
          input.removeClass('error').addClass('correct');
          inputCorrect += 1;
        } else {
          input.removeClass('correct').addClass('error');
          correct = false;
        }
      });

      result.html(inputCorrect + '/' + inputCount).fadeIn();
      if(correct) {
        result.addClass('correct');
        // TODO
        console.log('CORRECT!');
      }

      return false;
    };

    $scope.save = function () {
      $scope.song.$save(function (song) {
        $location.path('/song/' + song._id);
      });
    };

    $scope.delete = function () {
      $scope.song.$delete(function () {
        $location.path('/songlist');
      });
    };
  });