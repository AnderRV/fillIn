'use strict';

angular.module('fillInApp')
  .controller('SongCtrl', function ($scope, $routeParams, $http, $location, Songs) {

    Songs.get({songId: $routeParams.itemId}, function (songs) {
      $scope.song = songs;
      $scope.$root.pageTitle = $scope.song.name;
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
          input.css({'border-color': '#468847', 'color': '#468847'});
          inputCorrect += 1;
        } else {
          input.css({'border-color': '#b94a48', 'color': '#b94a48'});
          correct = false;
        }
      });

      result.html(inputCorrect+'/'+inputCount).fadeIn();
      if(correct) {
        result.css({'border-color': '#468847', 'color': '#468847'});
        // TODO
        console.log('CORRECT!');
      }

      return false;
    };

    $scope.save = function () {
      $scope.song.$save(function (song) {
        $location.path('/song/'+song._id);
      });
    };

    $scope.delete = function () {
      $scope.song.$delete();
    };
  });