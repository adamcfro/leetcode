/**
 * Given an integer array nums of distinct integers, returns the largest
 * subarray of nums of length k.
 * 
 * An array A is larger than some array B if for the first index i where
 * A[i] != B[i], A[i] > B[i].
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - The length of subarrays
 * @returns {number[]} - Returns the largest subarray of nums of length k
 */
function largestSubarray (nums, k) {
  let start = 0;
  for (let i = 1; i < nums.length - k + 1; i++) {
    if (nums[i] > nums[start]) {
      start = i;
    }
  }
  return nums.slice(start, start + k);
}