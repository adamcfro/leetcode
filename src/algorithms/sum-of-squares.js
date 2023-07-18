/**
 * Given a 1-indexed integer array nums of length n, returns the sum of the
 * squares of all special elements of nums.
 * 
 * An element nums[i] of nums is special if i divides n, i.e. n % i === 0.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the sum of the squares of all special elements
 */
function sumOfSquares (nums) {
  let sum = 0;
  let len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (len % (i + 1) === 0) {
      sum += nums[i] ** 2;
    }
  }
  return sum;
}