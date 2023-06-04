/**
 * Given a string s, returns the number of distinct substrings of s.
 * 
 * A substring of a string is obtained by deleting any number of characters
 * (possibly zero) from the front of the string and any number (possibly zero)
 * from the back of the string.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns a count of distinct substrings in s
 */
function countDistinctSubstrings (s) {
  let distinctSubs = new Set();
  for (let i = 0; i < s.length; i++) {
    let substr = '';
    for (let j = i; j < s.length; j++) {
      substr += s[j];
      if (!distinctSubs.has(substr)) {
        distinctSubs.add(substr);
      }
    }
  }
  return distinctSubs.size;
}