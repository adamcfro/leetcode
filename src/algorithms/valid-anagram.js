/**
 * Given two strings s and t, returns true if t is an anagram of s, and
 * false otherwise.
 * 
 * An anagram is a word or phrase formed by rearranging the letters of
 * a different word or phrase, typically using all the original letters
 * exactly once.
 * 
 * @param {string} s - First string parameter
 * @param {string} t - Second string parameter
 * @returns {boolean} - Returns true if t is an anagram of s, false otherwise
 */
function validAnagram (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let letters = {};
  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = (letters[s[i]] || 0) + 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (!letters[t[j]] || letters[t[j]] <= 0) {
      return false;
    } else {
      letters[t[j]] -= 1;
    }
  }
  return true;
}