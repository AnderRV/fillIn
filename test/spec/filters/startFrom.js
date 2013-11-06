'use strict';

describe('Filter: startFrom', function () {

  // load the filter's module
  beforeEach(module('fillInApp'));

  // initialize a new instance of the filter before each test
  var startFrom;
  beforeEach(inject(function ($filter) {
    startFrom = $filter('startFrom');
  }));

  it('should slice correctly an array"', function () {
    var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(startFrom(elements)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(startFrom(elements, 0)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(startFrom(elements, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(startFrom(elements, 8)).toEqual([8, 9]);
    expect(startFrom(elements, 9)).toEqual([9]);
    expect(startFrom(elements, 10)).toEqual([]);
    expect(startFrom(elements, 100)).toEqual([]);

    expect(startFrom(elements, -1)).toEqual([9]);
    expect(startFrom(elements, -2)).toEqual([8, 9]);
    expect(startFrom(elements, -9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(startFrom(elements, -10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(startFrom(elements, -100)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});