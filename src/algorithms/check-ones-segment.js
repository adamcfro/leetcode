/**
 * Given a binary string s without leading zeros, returns true if s contains
 * at most one contiguous segment of ones. Otherwise, returns false.
 * 
 * @param {string} s - A string of 0's and 1's
 * @returns {boolean} - Returns true if s contains at most one contiguous
 *     segment of ones
 */
function checkOnesSegment (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1' && s[i - 1] !== '1') {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}