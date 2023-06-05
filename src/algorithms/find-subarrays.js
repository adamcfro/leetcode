/**
 * Given an integer array nums, determines whether there exists tow subarrays
 * of length 2 with equal sum, and returns true if these subarrays exist.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if two subarrays of equal sum exist
 */
function findSubarrays (nums) {
  let sums = new Set();
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i] + nums[i + 1];
    if (!sums.has(sum)) {
      sums.add(sum);
    } else {
      return true;
    }
  }
  return false;
}