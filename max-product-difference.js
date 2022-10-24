/**
 * Returns the maximum product difference between two pairs of numbers.
 * 
 * Given an integer array nums, uses four distinct indices such that
 * the product difference between pairs is maximized.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the maximum product difference between two pairs
 */
function maxProductDifference (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
}