/**
 * Returns true if n is a power of two. Otherwise, returns false.
 *     • An integer is a power of two if there exists an integer x, such that
 *       n === 2 ** x.
 * 
 * @param {number} n - A number parameter
 * @returns {boolean} - Returns true if n is a power of two
 */
function isPowerOfTwo (n) {
  let i = 0;
  let total = 0;
  if (n === 0) {
    return false;
  }
  while (total < n) {
    total = Math.pow(2, i);
    i++;
  }
  return n === total;
}