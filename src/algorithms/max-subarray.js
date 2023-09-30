/**
 * Given an integer array nums, find the subarray with the largest sum, and 
 * return its sum.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the largest sum from a subarray
 */
function maxSubArray (nums) {
  let largestSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    largestSum = currentSum > largestSum ? currentSum : largestSum;
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return largestSum;
}