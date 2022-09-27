/**
 * Given an array of integers nums and an integer target, return indices 
 * of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you 
may not use the same element twice.

You can return the answer in any order.
 * 
 * @param {Array} nums - An array of numbers
 * @param {number} target - A number two integers should sum to
 * @returns {Array} - Returns an array of indices of the two numbers that
 * add up to target
 */
function twoSum (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (nums.includes(temp, i + 1)) {
      return [i, nums.indexOf(temp, i + 1)];
    }
  }
}