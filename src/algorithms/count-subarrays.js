/**
 * Given an integer array nums, return the number of subarrays of length 3 such
 * that the sum of the first and third numbers equals exactly half of the
 * second number.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - Returns a count of conditions that are met.
 */

function countSubarrays(nums) {
  count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if ((nums[i] + nums[i + 2]) * 2 === nums[i + 1]) {
      count += 1;
    }
  }
  return count;
}
