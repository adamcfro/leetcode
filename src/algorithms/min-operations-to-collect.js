/**
 * You are given an array nums of positive integers and an integer k. In one
 * operation, you can remove the last element of the array and add it to your
 * collection. Return the minimum number of operations needed to collect
 * elements 1, 2, ..., k.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number parameter
 * @returns {number} - The number of operations needed to collect elements
 *     1, 2, ..., k
 */
function minOperations(nums, k) {
  const set = new Set();
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    count++;
    if (nums[i] <= k) {
      set.add(nums[i]);
    }
    if (set.size === k) {
      break;
    }
  }
  return count;
}
