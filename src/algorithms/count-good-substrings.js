/**
 * Given a string s, returns the number of good substrings of length 3 in s.
 * A string is good if there are no repeated characters.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns a count of good substrings
 */
function countGoodSubstrings (s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
      count++;
    }
  }
  return count;
}