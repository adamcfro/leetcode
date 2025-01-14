/**
 * You are given a positive number n. Return the smallest number x greater than
 * or equal to n, such that the binary representation of x contains only set
 * bits.
 *
 * @format
 * @param {number} n - A positive number.
 * @returns {number} - Returns the smallest number greater than or equal to n
 *   that contains only set bits
 */

function allSetBits(n) {
  onlySetBits = false;
  while (!onlySetBits) {
    curr = n.toString(2);
    for (let i = 0; i < curr.length; i++) {
      if (curr[i] !== "1") {
        n++;
        break;
      }
      if (i + 1 === curr.length) {
        onlySetBits = true;
      }
    }
  }
  return n;
}
