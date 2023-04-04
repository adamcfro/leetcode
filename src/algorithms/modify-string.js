/**
 * Given a string s containing only lowercase English letters and the '?' 
 * character, converts all the '?' characters into lowercase letters such that 
 * the final string does not contain any consecutive repeating characters. 
 * Returns the final string after all conversions have been made.
 * 
 * @param {string} s - A string of lowercase English letters and '?'
 * @returns {string} - Returns a string with no repeating characters
 */
function modifyString (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      for (char of 'abc') {
        if (res[i - 1] !== char && s[i - 1] !== char && s[i + 1] !== char) {
          res += char;
          break;
        }
      }
    } else {
      res += s[i];
    }
  }
  return res;
}