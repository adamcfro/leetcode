/**
 * Given an integer n, returns true if it is a power of three. Otherwise, 
 * returns false.
 * 
 * An integer n is a power of three if there exists an integer x such that
 * n === 3 ** x.
 * 
 * @param {number} n - A number parameter
 * @returns {boolean} - Returns true if n is a power of three
 */
function isPowerOfThree (n) {
  if (n < 1) {
    return false;
  }
  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }
  return n === 1;
}