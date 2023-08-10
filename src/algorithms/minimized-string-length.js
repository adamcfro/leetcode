/**
 * Given a string s, repeatedly performs the following operation to minimize 
 * the length of s:
 *   • Choose an index i in the string, where c is the character in position i.
 *   • Delete the closest occurrence of c to the left of i (if any) and the 
 *     closest occurrence of c to the right of i (if any).
 * • Returns an integer denoting the length of the minimized string.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the length of the minimized string
 */
function minimizedStringLength (s) {
  let occurrences = new Set();
  for (let i = 0; i < s.length; i++) {
    occurrences.add(s[i]);
  }
  return occurrences.size;
}