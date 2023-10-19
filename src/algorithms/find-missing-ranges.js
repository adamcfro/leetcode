/**
 * Given an inclusive range [lower, upper] and a sorted unique integer array
 * nums, where all elements are within the inclusive range, returns the
 * shortest sorted list of ranges that exactly covers all the missing numbers.
 * That is, no element of nums is included in any of the ranges, and each
 * missing number is covered by one of the ranges.
 *
 * A number x is considered missing if x is in the range [lower, upper] and x
 * is not in nums.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} lower - A number representing the lower end of a range
 * @param {number} upper - A number representing the upper end of a range
 */

function findMissingRanges(nums, lower, upper) {
  const ranges = [];
  let start = lower;
  for (const num of nums) {
    if (start < num) {
      ranges.push([start, num - 1]);
    }
    start = num + 1;
  }
  if (start <= upper) {
    ranges.push([start, upper]);
  }
  return ranges;
}
