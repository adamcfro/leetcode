/**
 * You are given a 0-indexed 2D integer array nums representing the coordinates
 * of the cars parking on a number line.
 *
 * For any index i, nums[i] = [starti, endi] where starti is the starting point
 * of the ith car and endi is the ending point of the ith car.
 *
 * Returns the number of integer points on the line that are covered with any
 * part of a car.
 *
 * @format
 * @param {number[]} nums - A 2D array of numbers
 * @returns {number} - Returns a number representing points that are covered by
 *     any part of a car
 */

function numberOfPoints(nums) {
  let points = new Set();
  for (let [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      if (!points.has(i)) {
        points.add(i);
      }
    }
  }
  return points.size;
}
