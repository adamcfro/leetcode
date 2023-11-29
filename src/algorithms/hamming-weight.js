/**
 * Takes in the binary representation of an unsigned integer and returns the
 * number of '1' bits it has.
 *
 * @format
 * @param {number} n - A binary string of length 32
 * @returns {number} - Returns the count of '1' bits in n
 */

function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
}
