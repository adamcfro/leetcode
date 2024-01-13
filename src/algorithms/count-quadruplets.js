/**
 * Given a 0-indexed integer array nums, returns the number of distinct
 * quadruplets (a, b, c, d) such that:
 *   • nums[a] + nums[b] + nums[c] == nums[d], and
 *   • a < b < c < d
 *
 * @format
 * @param {number[]} nums - An array of positive numbers
 * @returns {number} - Returns a count of special quadruplets
 */

function countQuadruplets(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] === nums[l]) {
            count++;
          }
        }
      }
    }
  }
  return count;
}
