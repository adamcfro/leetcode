/**
 * Given a binary string s, returns the number of substrings with only 1's.
 * Returns the answer modulo 10^9 + 7.
 * 
 * @param {string} s - A string of 0's and 1's
 * @returns {number} - Returns the number of substrings consisting of only 1's
 */
function numSub(s) {
  let res = 0;
  let count = 0;
  let mod = 1000000007;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
      res = (res + count) % mod;
    } else {
      count = 0;
    }
  }
  return res;
}
