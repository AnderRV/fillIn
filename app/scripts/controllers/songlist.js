'use strict';

angular.module('fillInApp')
  .controller('SonglistCtrl', function ($scope, $http, $filter, Songs) {
    $scope.songs = Songs.query({}, function (songs) {
      $scope.songs = songs;
      $scope.filteredSongs = songs;
    });

    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.reverse = false;
    $scope.query = '';
    $scope.numberOfPages = 0;
    $scope.songs = [];
    $scope.filteredSongs = [];

    $scope.paginationPages = [];

    $scope.$watch('query', function() {
      $scope.currentPage = 0;
      $scope.filteredSongs = $filter('filter')($scope.songs, $scope.query);
    }, true);

    $scope.$watch('pageSize', function() {
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
    };
      
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
  });