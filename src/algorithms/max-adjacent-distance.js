/**
 * Given a circular array nums, find the maximum absolute difference between
 * adjacent elements.
 *
 * Note: In a circular array, the first and last elements are adjacent.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - Returns the max abs difference between adjacent elements.
 */

function maxAdjacentDistance(nums) {
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    res = Math.max(res, Math.abs(nums[i] - nums[i + 1]));
  }
  res = Math.max(res, Math.abs(nums[0] - nums[nums.length - 1]));
  return res;
}
