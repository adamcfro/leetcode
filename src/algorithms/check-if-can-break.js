/**
 * Given two strings with the same size, returns true if some permutation of
 * string s1 can break some permutation of s2 or vice-versa.
 * 
 * A string x can break string y if x[i] >= y[i] (in alphabetical order)
 * for all i between 0 and n-1.
 * 
 * @param {string} s1 - First string of lowercase letters
 * @param {string} s2 - Second string of lowercase letters
 * @returns {boolean} - Returns true if one of the strings can break the other
 */
function checkIfCanBreak (s1, s2) {
  let s1CanBreak = true;
  let s2CanBreak = true;
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] < s2[i]) {
      s1CanBreak = false;
    }
    if (s2[i] < s1[i]) {
      s2CanBreak = false;
    }
  }
  return s1CanBreak || s2CanBreak;
}