/**
 * You are given a 0-indexed integer array nums, and an integer k. In one
 * operation, you can remove one occurrence of the smallest element of nums
 * Return the minimum number of operations needed so that all elements of the
 * array are greater than or equal to k.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number representing a threshold
 * @returns {number} - Returns a count of elements less than k
 */

function minOperations(nums, k) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= k) {
      count++;
    } else {
      return nums.length - count;
    }
  }
  return 0;
}
