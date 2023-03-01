/**
 * Given two strings, returns true if s is a subsequence of t, or false
 * otherwise.
 * 
 * @param {string} s - A possible subsequence of string t
 * @param {string} t - A string of lowercase English letters
 * @returns {boolean} - Returns true if s is a subsequence of t
 */
function isSubsequence (s, t) {
  if (s.length === 0) {
    return true;
  }
  for (let i = 0, j = 0; i < t.length && j < s.length; i++) {
    if (s[j] === t[i]) {
      j++;
    }
    if (j >= s.length) {
      return true;
    }
  }
  return false;
}