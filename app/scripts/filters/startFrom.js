'use strict';

angular.module('fillInApp')
	.filter('startFrom', function () {
		return function (input, start) {
			start = parseInt(start, 10);

			if(input && input.slice && !isNaN(start)) {
				return input.slice(start);
			}

			return input;
		};
	});