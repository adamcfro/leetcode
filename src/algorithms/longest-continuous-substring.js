/**
 * Given a string s consisting of lowercase English letters only, returns the
 * length of the longest alphabetical continuous substring.
 * 
 * An alphabetical continuous substring is a string consisting of consecutive
 * letters in the alphabet.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the length of the longest continuous substring
 */
function longestContinuousSubstring (s) {
  let res = 1;
  let temp = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      temp++;
      res = temp > res ? temp : res;
    } else {
      temp = 1;
    }
  }
  return res;
}