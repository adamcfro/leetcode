/**
 * Given an integer array nums, returns the minimum number of operations
 * needed to make nums strictly increasing.
 * 
 * In one operation, an element may be incremented by 1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of operations performed
 */
function minOperations (nums) {
  let operations = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      operations += nums[i] - nums[i + 1] + 1;
      nums[i + 1] += nums[i] - nums[i + 1] + 1;
    }
  }
  return operations;
}