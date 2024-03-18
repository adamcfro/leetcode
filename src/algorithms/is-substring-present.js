/**
 * Given a string s, returns true if any substring of length 2 is also present
 * in the reverse of s.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @returns {boolean} - Returns true if any substring of length 2 is also
 *     present in the reverse of s.
 */

function isSubstringPresent(s) {
  let substrings = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    substrings.add(s.slice(i, i + 2));
  }
  s = s.split("").reverse().join("");
  for (let i = 0; i < s.length - 1; i++) {
    if (substrings.has(s.slice(i, i + 2))) {
      return true;
    }
  }
  return false;
}
