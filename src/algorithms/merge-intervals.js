/**
 * Given an array of intervals where intervals[i] = [starti, endi], merges all
 * overlapping intervals, and returns an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 * @format
 * @param {number[][]} intervals - A 2D array of numbers
 * @returns {number[][]} - Returns a 2D array with intervals merged
 */

function merge(intervals) {
  let res = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let interval = intervals[0];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= interval[1]) {
      interval = [
        Math.min(interval[0], intervals[i][0]),
        Math.max(intervals[i][1], interval[1]),
      ];
    } else {
      res.push(interval);
      interval = intervals[i];
    }
  }
  if (res[res.length - 1] !== interval) {
    res.push(interval);
  }
  return res;
}
