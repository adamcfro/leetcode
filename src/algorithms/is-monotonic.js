/**
 * An array is monotonic if it is either monotone increasing or monotone
 * decreasing. An array nums is monotone increasing if for all i <= j, 
 * nums[i] <= nums[j]. An array nums is monotone decreasing if for all
 * i <= j, nums[i] >= nums[j].
 * 
 * Given an integer array nums, returns true if the given array is monotonic,
 * or false otherwise.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if the array is monotone increasing or
 *     monotone decreasing
 */
function isMonotonic (nums) {
  let direction = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (direction === 1) {
        return false;
      }
      direction = -1;
    } else if (nums[i] < nums[i + 1]) {
      if (direction === -1) {
        return false;
      }
      direction = 1;
    }
  }
  return true;
}