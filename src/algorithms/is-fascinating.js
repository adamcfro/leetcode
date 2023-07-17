/**
 * Given an integer n that consists of exactly 3 digits, returns true if n is
 * fascinating, or false otherwise.
 * 
 * A number is fascinating if, after concatenating n with the numbers 2 * n and 
 * 3 * n, the resulting number contains all the digits from 1 to 9 exactly once 
 * and does not contain any 0's.
 * 
 * @param {number} n - A 3-digit number
 * @returns {boolean} - Returns true if n is a fascinating number
 */
function isFascinating (n) {
  let numSet = new Set();
  let num = String(n);
  num = num.concat(n * 2, n * 3);
  for (const digit of num) {
    if (digit === '0' || numSet.has(digit)) {
      return false;
    } else {
      numSet.add(digit);
    }
  }
  return numSet.size === 9;
}