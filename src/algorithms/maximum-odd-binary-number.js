/**
 * Given a binary string s that contains at least one '1', rearranges the bits
 * in such a way that the resulting binary number is the maximum odd binary
 * number that can be created from this combination.
 * 
 * Returns a string representing the maximum odd binary number that can be
 * created from the given combination. The resulting string can have leading
 * zeros.
 * 
 * @param {string} s - A string of 0's and 1's
 * @returns {string} - Returns a binary string
 */
function maximumOddBinaryNumber (s) {
  let res = '';
  let onesCount = -1;
  for (const num of s) {
    if (num === '1') {
      onesCount++;
    }
  }
  for (let i = 0; i < s.length - 1; i++, onesCount--) {
    res += onesCount > 0 ? '1' : '0';
  }
  return res + '1';
}