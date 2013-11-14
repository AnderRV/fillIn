'use strict';

angular.module('fillInApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/songlist', {
        templateUrl: 'views/songlist.html',
        controller: 'SonglistCtrl'
      }).
      when('/song/new', {
        templateUrl:'views/song_edit.html',
        controller: 'SongCreateCtrl'
      })
      .when('/song/:itemId/edit', {
        templateUrl: 'views/song_edit.html',
        controller: 'SongCtrl'
      })
      .when('/song/:itemId', {
        templateUrl: 'views/song.html',
        controller: 'SongCtrl'
      })
      .otherwise({
        redirectTo: '/songlist'
      });
  });

// TODO
$(document).ready(function() {
  $(document).on('focus', '#lyrics :input', function() {
    var center = window.innerHeight / 2,
      top = $(this).offset().top ;

    if (top > center){
      $('html, body').stop().animate({
        scrollTop: (top-center)
      }, 800);
    }
  });
});