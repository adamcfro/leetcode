/**
 * Given a 0-indexed integer array nums having length n, an integer
 * indexDifference, and an integer valueDifference, finds two indices i and j,
 * both in the range [0, n - 1], that satisfy the following conditions:
 *   • abs(i - j) >= indexDifference, and
 *   • abs(nums[i] - nums[j]) >= valueDifference
 * Returns an integer array answer, where answer = [i, j] if there are two such
 * indices, and answer = [-1, -1] otherwise. If there are multiple choices for
 * the two indices, returns any of them.
 *
 * Note: i and j may be equal.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} indexDifference - A number representing index difference
 * @param {number} valueDifference - A number representing value difference
 * @returns {number[]} - Returns an array of indices
 */

function findIndices(nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (Math.abs(i - j) >= indexDifference) {
        if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
          return [i, j];
        }
      }
    }
  }
  return [-1, -1];
}
