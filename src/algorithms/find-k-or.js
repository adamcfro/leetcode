/**
 * You are given an integer array nums, and an integer k. Let's introduce K-or
 * operation by extending the standard bitwise OR. In K-or, a bit position in
 * the result is set to 1 if at least k numbers in nums have a 1 in that
 * position.
 *
 * Return the K-or of nums.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number representing an amount
 * @returns {number} - Returns the K-or of nums
 */

function findKOr(nums, k) {
  let res = 0;
  for (let i = 0; i < 31; i++) {
    let pos = 1 << i;
    let count = 0;
    for (let num of nums) {
      if ((pos & num) !== 0) {
        count++;
      }
    }
    if (count >= k) {
      res = res + pos;
    }
  }
  return res;
}
