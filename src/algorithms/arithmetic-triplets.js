/**
 * Given a strictly increasing integer array nums and a positive integer diff,
 * returns the number of unique arithmetic triplets.
 *
 * A triplet (i, j, k) is an arithmetic triplet if the following conditions are
 * met:
 *   • i < j < k,
 *   • nums[j] - nums[i] == diff, and
 *   • nums[k] - nums[j] == diff.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} diff - A number representing difference in value
 * @returns {number} - Returns a count of arithmetic triplets
 */

function arithmeticTriplets(nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          count++;
        }
      }
    }
  }
  return count;
}
