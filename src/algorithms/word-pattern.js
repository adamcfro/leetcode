/**
 * Given a pattern and a string s, finds if s follows the same pattern.
 * 
 * Follow means a full match, such that there is a bijection between a letter
 * in pattern and a non-empty word.
 * 
 * @param {string} pattern - A string of lowercase English letters
 * @param {string} s - A string of lowercase English letters representing a word
 * @returns {boolean} - Return true if s follows the same pattern as pattern
 */
function wordPattern (pattern, s) {
  let res = false;
  let matches = {};
  let wordSet = new Set();
  s = s.split(' ');
  if (pattern.length !== s.length) {
    return res;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (!matches[pattern[i]]) {
      if (!wordSet.has(s[i])) {
        matches[pattern[i]] = s[i];
        wordSet.add(s[i]);
      } else {
        return res;
      }
    } else if (matches[pattern[i]] !== s[i]) {
      return res;
    }
  }
  res = true;
  return res;
}