/**
 * You are given an integer array nums, an integer k, and an integer multiplier.
 * You need to perform k operations on nums. In each operation:
 * • Find the minimum value x in nums. If there are multiple occurrences of the
 * minimum value, select the one that appears first.
 * • Replace the selected minimum value x with x * multiplier.
 * Return an integer array denoting the final state of nums after performing
 * all k operations.
 *
 * @format
 * @param {number[]} nums - An array of positive numbers.
 * @param {number} k - A positive number.
 * @param {number} multiplier - A positive number.
 * @returns {number[]} - Returns a modified array of numbers.
 */

function getFinalState(nums, k, multiplier) {
  i = 0;
  while (i < k) {
    index = nums.indexOf(Math.min(...nums));
    nums[index] = nums[index] * multiplier;
    i++;
  }
  return nums;
}
