/**
 * Given a string s, returns the power of s.
 * 
 * The power of the string is the maximum length of a non-empty substring that
 * contains only one unique character.
 * 
 * @param {string} s - A string of lowercase English characters
 * @returns {number} - Returns a count of the longest substring of one character
 */
function maxPower (s) {
  let res = 0;
  let temp = 0;
  let current = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === current) {
      temp++;
    } 
    if (temp > res) {
      res = temp;
    }
    if (s[i] !== current) {
      current = s[i];
      temp = 1;
    }
  }
  return res;
}