/**
 * Given an array of integers nums, where half of the integers in nums are odd,
 * and the other half are even, the array is sorted so that whenever nums[i] is
 * odd, i is odd, and whenever nums[i] is even, i is even.
 *
 * Returns any answer array that satisfies this condition.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers sorted by parity
 */

function sortArrayByParityII(nums) {
  let res = [];
  let evens = [];
  let odds = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(evens.pop());
    } else {
      res.push(odds.pop());
    }
  }
  return res;
}
