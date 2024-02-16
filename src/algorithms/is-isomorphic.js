/**
 * Given two strings s and t, determine if they are isomorphic. Two strings s
 * and t are isomorphic if the characters in s can be replaced to get t. All
 * occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 *
 * @format
 * @param {string} s - A string of valid ascii characters
 * @param {string} t - A string of valid ascii characters
 * @returns {boolean} - Returns true if s and t are isomorphic
 */

function isIsomorphic(s, t) {
  let map = {};
  let seen = new Set();
  for (let i = 0; i < s.length; i++) {
    const firstChar = s[i];
    const secondChar = t[i];
    if (map.hasOwnProperty(firstChar)) {
      if (map[firstChar] !== secondChar) {
        return false;
      }
    } else {
      if (!seen.has(secondChar)) {
        map[firstChar] = secondChar;
        seen.add(secondChar);
      } else {
        return false;
      }
    }
  }
  return true;
}
