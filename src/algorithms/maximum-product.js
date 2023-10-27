/**
 * Given an integer array nums, returns the maximum product of three numbers
 * from the array.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the maximum product of any three numbers
 */

function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
}
