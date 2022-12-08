/**
 * Given an integer array nums and an integer k, returns the number of pairs
 * whose absolute value is equal to k.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A target for the absolute difference of a pair of numbers
 * @returns {number} - Returns a count of pairs whose absolute value equals k
 */
function countKDifference (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  return count;
}