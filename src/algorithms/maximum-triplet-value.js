/**
 * Given a 0-indexed integer array nums, returns the maximum value over all
 * triplets of indices (i, j, k) such that i < j < k. If all such triplets have
 * a negative value, returns 0.
 *
 * The value of a triplet of indices (i, j, k) is equal to:
 *   • (nums[i] - nums[j]) * nums[k].
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the max value over all triplets
 */

function maximumTripletValue(nums) {
  let maxVal = 0;
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        let sum = (nums[i] - nums[j]) * nums[k];
        if (sum > maxVal) {
          maxVal = sum;
        }
      }
    }
  }
  return maxVal;
}
