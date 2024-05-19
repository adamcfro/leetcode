/**
 * Given an array of integers nums where an array is considered special if
 * every pair of its adjacent elements contains two numbers with different
 * parity, returns true if nums is a special array, otherwise, returns false.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if nums is a special array
 */

function isArraySpecial(nums) {
  let prev = nums[0] % 2 === 0 ? true : false;
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i] % 2 === 0 ? true : false;
    if (curr === prev) {
      return false;
    }
    prev = curr;
  }
  return true;
}
