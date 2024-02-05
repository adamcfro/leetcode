/**
 * Given a 0-indexed array nums of integers, returns the minimum possible sum
 * of a mountain triplet of nums. If no such triplet exists, returns -1.
 *
 * A triplet of indices (i, j, k) is a mountain if:
 *   • i < j < k, and
 *   • nums[i] < nums[j] and nums[k] < nums[j].
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the minimum sum of mountain triplets
 */

function minimumSum(nums) {
  let sum = -1;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] > nums[k]) {
          let tempSum = nums[i] + nums[j] + nums[k];
          if (sum === -1) {
            sum = tempSum;
          } else {
            sum = Math.min(sum, tempSum);
          }
        }
      }
    }
  }
  return sum;
}
