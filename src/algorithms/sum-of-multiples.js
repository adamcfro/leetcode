/**
 * Given a positive integer n, finds the sum of all integers in the range
 * [1,n] inclusive that are divisible by 3, 5, or 7, and returns the sum of all
 * numbers in the given range satisfying the constraint.
 * 
 * @param {number} n - A number denoting the upper end of a range
 * @returns {number} - Returns the sum of numbers divisible by 3, 5, or 7
 */
function sumOfMultiples (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}