/**
 * Given an integer array nums and an integer k, finds the subsequence of nums
 * of length k that has the largest sum. Returns any such subsequence as an
 * integer array of length k.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - The length of the subsequence array
 * @returns {number[]} - Returns an array of length k with the largest sum
 */
function maxSubsequence (nums, k) {
  while (nums.length > k) {
    nums.splice(nums.indexOf(Math.min(...nums)), 1);
  }
  return nums;
}