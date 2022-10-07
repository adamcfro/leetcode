/**
 * Given an integer array nums, returns true if any value appears at least
 * twice in the array, and returns false if every element is distinct.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if all elements are distinct
 */
function containsDuplicate (nums) {
  let elements = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (elements.has(nums[i])) {
      return true;
    } else {
      elements.add(nums[i]);
    }
  }
  return false;
}