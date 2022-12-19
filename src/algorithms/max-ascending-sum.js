/**
 * Given an array of positive integers nums, returns the maximum possible sum
 * of an ascending subarray in nums.
 * 
 * A subarray is defined as a contiguous sequence of numbers in an array, and
 * it is ascending if all numbers in the subarray are of a higher value than
 * the previous number.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the sum of the largest ascending subarray
 */
function maxAscendingSum (nums) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1] || nums[i - 1] === undefined) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}