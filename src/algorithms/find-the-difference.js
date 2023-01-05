/**
 * Given two strings s and t, where t is genereated by randomly shuffling
 * string s and adding one more letter at a random position, returns the
 * letter that was added to t.
 * 
 * @param {string} s - First string of lowercase English letters
 * @param {string} t - Second string of lowercase English letters
 * @returns {string} - Returns the letter added to t
 */
function findTheDifference (s, t) {
  let chars = {};
  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = (chars[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    chars[t[i]] = (chars[t[i]] || 0) - 1;
    if (chars[t[i]] < 0) {
      return t[i];
    }
  }
}