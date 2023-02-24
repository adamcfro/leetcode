/**
 * Given two strings s and part, removes all occurrences of substring part from
 * s until all occurrences of part are removed. Returns s after removing all
 * ocurrences of part.
 * 
 * @param {string} s - A string of lowercase English letters
 * @param {string} part - A substring of lowercase English letters
 * @returns {string} - Returns a modified string
 */
function removeOccurrences (s, part) {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }
  return s;
}