/**
 * Given an integer array nums of length 2n that contains n + 1 unique elements,
 * returns the element that is repeated n times.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the number that is repeated n times
 */
function repeatedNTimes (nums) {
  let elements = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (elements.has(nums[i])) {
      return nums[i];
    } else {
      elements.add(nums[i]);
    }
  }
}