/**
 * Given an integer n, returns true if it is a power of four. Otherwise, returns
 * false. An integer is a power of four if there exists an integer x, such that
 * n == 4 ** x.
 *
 * @format
 * @param {number} n - A number parameter
 * @returns {boolean} - Returns true if n is a power of four
 */

function isPowerOfFour(n) {
  for (let i = 0; i < n; i++) {
    const pow = 4 ** i;
    if (pow === n) {
      return true;
    }
    if (pow > n) {
      return false;
    }
  }
  return false;
}
