/**
 * Given an integer array nums, returns the largest integer that occurs once.
 * If no integer occurs once, returns -1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the largest singly occurring number or -1 if
 *     no number occurs only once
 */
function largestUniqueNumber (nums) {
  let numCount = {};
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
  let max = -1;
  for (const [key, val] of Object.entries(numCount)) {
    if (Number(key) > max && val === 1) {
      max = Number(key);
    }
  }
  return max;
}