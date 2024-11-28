/**
 * In the town of Digitville, there was a list of numbers called nums
 * containing integers from 0 to n - 1. Each number was supposed to appear
 * exactly once in the list, however, two mischievous numbers sneaked in an
 * additional time, making the list longer than usual. As the town detective,
 * your task is to find these two sneaky numbers. Return an array of size two
 * containing the two numbers (in any order), so peace can return to Digitville.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} - Returns an array of two numbers.
 */

function getSneakyNumbers(nums) {
  res = [];
  set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      res.push(nums[i]);
      if (res.length == 2) {
        break;
      }
    }
  }
  return res;
}
