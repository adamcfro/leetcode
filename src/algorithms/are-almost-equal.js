/**
 * You are given two strings s1 and s2 of equal length. A string swap is an
 * operation where you choose two indices in a string (not necessarily
 * different) and swap the characters at these indices.
 *
 * Return true if it is possible to make both strings equal by performing at
 * most one string swap on exactly one of the strings. Otherwise, return false.
 *
 * @format
 * @param {string} s1 - A string of lowercase English letters
 * @param {string} s2 - A string of lowercase English letters
 * @returns {boolean} - Returns true if strings can be equal after one swap
 */

function areAlmostEqual(s1, s2) {
  if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        count++;
        if (count > 2) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}
