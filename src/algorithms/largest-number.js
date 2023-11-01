/**
 * Given a list of non-negative integers nums, arranges them such that they
 * form the largest number and returns it. Since the result may be very large,
 * returns a string instead of an integer.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {string} - Returns the string form of the largest number
 */

function largestNumber(nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return nums[0] == 0 ? "0" : nums.join("");
}
