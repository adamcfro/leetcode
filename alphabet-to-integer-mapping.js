/**
 * Given a string s formed by numbers and '#', maps s to lowercase English
 * characters as follows:
 *     • Characters ('a' to 'i') are represented by ('1' to '9').
 *     • Characters ('j' to 'z') are represented by ('10#' to '26#').
 * 
 * Returns the string formed after mapping.
 * 
 * @param {string} s - A string made up of numbers and the octothorpe symbol
 * @returns {string} - Returns a newly created string
 */
function freqAlphabets (s) {
  let chars = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] < 10 && s[i + 2] !== '#') {
      chars.push(String.fromCharCode(Number(s[i]) + 96));
      i++;
    } else {
      chars.push(String.fromCharCode(Number(s[i] + s[i + 1]) + 96));
      i += 3;
    }
  }
  return chars.join('');
}