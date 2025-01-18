/**
 * You are given an integer array nums. In one operation, you can add or
 * subtract 1 from any element of nums. Return the minimum number of operations
 * to make all elements of nums divisible by 3.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - Returns a count of operations.
 */

function minimumOperations(nums) {
  count = 0;
  for (let num of nums) {
    if (num % 3 !== 0) {
      count++;
    }
  }
  return count;
}
