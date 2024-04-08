/**
 * Given an array of integers nums, returns the length of the longest subarray
 * of nums which is either strictly increasing or strictly decreasing.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the length of a subarray
 */

function longestMonotonicSubarray(nums) {
  let res = 1;
  let inc = 1;
  let dec = 1;
  for (let i = 1; i < nums.length; i++) {
    inc = nums[i] >= nums[i - 1] ? 1 : inc + 1;
    dec = nums[i] <= nums[i - 1] ? 1 : dec + 1;
    res = Math.max(res, inc, dec);
  }
  return res;
}
