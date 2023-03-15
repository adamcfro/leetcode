/**
 * A happy number is a number defined by the following process:
 *     • Starting with any positive integer, replace the number by the sum of
 *       the squares of its digits.
 *     • Repeat the process until the number equals 1, or it loops endlessly
 *       in a cycle that does not include 1.
 *     • Those numbers for which this process ends in 1 are happy.
 * Returns true if n is a happy number, and false if not.
 * 
 * @param {number} n - A positive number
 * @returns {boolean} - Returns true if n is a happy number
 */
function isHappy (n) {
  let seenNums = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n !== 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (seenNums.has(sum)) {
      return false;
    } else {
      seenNums.add(sum);
      n = sum;
    }
  }
  return true;
}