/**
 * Given a string s consisting of only lowercase English letters, returns the
 * number of substrings in s that begin and end with the same character.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns a count of substrings that begin and end with
 *     the same character
 */
function numberOfSubstrings (s) {
  let count = 0;
  let chars = {};
  for (const char of s) {
    if (char in chars) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
    count += chars[char];
  }
  return count;
}