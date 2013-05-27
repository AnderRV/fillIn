'use strict';

/* Filters */
angular.module('fillIn.filters', []).
    filter('startFrom', function () {
        return function (input, start) {
            start = parseInt(start);
            if(input) {
                return input.slice(start);
            }
            return input;
        };
    });