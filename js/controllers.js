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
}
SongCtrl.$inject = ['$scope', '$routeParams', '$http'];