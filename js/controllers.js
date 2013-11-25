'use strict';

/* Controllers */

function SongsCtrl($scope, $http, $filter) {
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.reverse = false;
  $scope.query = '';
  $scope.numberOfPages = 0;
  $scope.songs = [];
  $scope.filteredSongs = [];

  $scope.paginationPages = [];

  $http.get('fakedata/songs.json').success(function(data) {
    $scope.songs = data;
    $scope.filteredSongs = data;
  });

  $scope.$watch('query', function(newVal, oldVal) {
    $scope.currentPage = 0;
    $scope.filteredSongs = $filter('filter')($scope.songs, $scope.query);
  }, true);

  $scope.$watch('pageSize', function(newVal, oldVal) {
    $scope.currentPage = 0;
    $scope.numberOfPages = $scope.calculateNumberOfPages();
  }, true);

  $scope.$watch('filteredSongs', function() {
    $scope.numberOfPages = $scope.calculateNumberOfPages();
  }, true);

  $scope.$watch('currentPage', function() {
    $scope.paginationPages = [];

    $scope.paginationPages.push($scope.currentPage-1);
    $scope.paginationPages.push($scope.currentPage);
    $scope.paginationPages.push($scope.currentPage+1);

  }, true);

  $scope.calculateNumberOfPages = function(){
    return Math.ceil($scope.filteredSongs.length/$scope.pageSize);                
  }
    
  $scope.prevPage = function () {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };
    
  $scope.nextPage = function () {
    if ($scope.currentPage < $scope.filteredSongs.length - 1) {
      $scope.currentPage++;
    }
  };
}
SongsCtrl.$inject = ['$scope', '$http', '$filter'];

function SongCtrl($scope, $routeParams, $http) {
  $http.get('fakedata/song' + $routeParams.itemId + '.json').success(function(data) {
    $scope.song = data;
    $scope.$root.pageTitle = $scope.song.name;
  });

  $scope.correct = function ($event) {
    $event.preventDefault();

    var lyrics, inputs, inputCount, result, input, correct, inputCorrect;

    lyrics = $("#lyrics");
    inputs = lyrics.find("input");
    inputCount = inputs.length;
    result = $("#result");

    correct = true;
    inputCorrect = 0;

    inputs.each(function(index, el) {
      input = $(this);
      if(input.val().toLowerCase() == input.data("result").toString().toLowerCase()) {
        input.removeClass("error").addClass("correct");
        inputCorrect += 1;
      } else {
        input.removeClass("correct").addClass("error");
        correct = false;
      }
    });

    result.html(inputCorrect+"/"+inputCount).fadeIn();
    if(correct) {
      result.addClass("correct");
      alert("CORRECT!");
    }

    return false;
  };
}
SongCtrl.$inject = ['$scope', '$routeParams', '$http'];