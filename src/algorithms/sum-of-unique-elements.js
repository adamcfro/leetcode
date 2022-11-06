/**
 * Given an integer array nums, returns the sum of all unique elements of nums.
 * 
 * Unique elements of an array are the elements that appear exactly once.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a sum of the unique elements
 */
function sumOfUnique (nums) {
  let sum = 0;
  let occurrences = {};
  for (let i = 0; i < nums.length; i++) {
    occurrences[nums[i]] = (occurrences[nums[i]] || 0) + 1;
  }
  for (const [key, value] of Object.entries(occurrences)) {
    if (value === 1) {
      sum += Number(key);
    }
  }
  return sum;
}