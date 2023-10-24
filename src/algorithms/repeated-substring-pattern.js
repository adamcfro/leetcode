/**
 * Given a string s, checks if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @returns {boolean} - Returns true if s can be reconstructed by appending
 *     multiple copies of a substring together
 */

function repeatedSubstringPattern(s) {
  const repeatedStr = s + s;
  const substr = repeatedStr.slice(1, repeatedStr.length - 1);
  return substr.includes(s);
}
