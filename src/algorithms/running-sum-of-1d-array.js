/**
 * Given an array nums, returns the running sum of nums.
 * 
 * A running sum is defined as runningSum[i] = sum(nums[0]...nums[i]).
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns the running sum of an array
 */
function runningSum (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}