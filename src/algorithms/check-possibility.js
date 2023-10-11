/**
 * Given an array nums with n integers, returns true if the array could become 
 * non-decreasing by modifying at most one element.
 * 
 * We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for 
 * every i (0-based) such that (0 <= i <= n - 2).
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if the array could become non-decreasing
 *     by modifying at most one element
 */
function checkPossibility (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (i >= 2 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
}