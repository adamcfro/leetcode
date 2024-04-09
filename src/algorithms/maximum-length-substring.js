/**
 * Given a string s, returns the maximum length of a substring such that it
 * contains at most two occurrences of each character.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the length of a substring
 */

function maximumLengthSubstring(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let seenChars = {};
    for (let j = i; j < s.length; j++) {
      seenChars[s[j]] = (seenChars[s[j]] || 0) + 1;
      if (seenChars[s[j]] > 2) {
        break;
      }
      res = Math.max(res, j - i + 1);
    }
  }
  return res;
}
