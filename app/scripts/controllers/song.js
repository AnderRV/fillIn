'use strict';

angular.module('fillInApp')
  .controller('SongCtrl', function ($scope, $routeParams, $http) {
	  $http.get('fakedata/song' + $routeParams.itemId + '.json').success(function(data) {
	    $scope.song = data;
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
  });