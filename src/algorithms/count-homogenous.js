/**
 * Given a string s, returns the number of homogenous substrings of s.
 *
 * A string is homogenous if all the characters of the string are the same.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the number of homogenous substrings
 */

function countHomogenous(s) {
  let res = 1;
  let streak = 1;
  const mod = 10 ** 9 + 7;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      streak++;
    } else {
      streak = 1;
    }
    res = (res + streak) % mod;
  }
  return res;
}
