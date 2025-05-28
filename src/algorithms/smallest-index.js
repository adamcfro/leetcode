/**
 * You are given an integer array nums. Return the smallest index i such that
 * the sum of the digits of nums[i] is equal to i. If no such index exists,
 * return -1.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - Returns an index or -1.
 */

function smallestIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    let num = nums[i];
    while (num != 0) {
      temp += num % 10;
      num = Math.floor(num / 10);
    }
    if (temp === i) {
      return i;
    }
  }
  return -1;
}
