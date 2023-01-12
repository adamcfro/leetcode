/**
 * Given a string s, finds the first non-repeating character in it and returns
 * its index. If it does not exist, returns -1 instead.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the index of the first non-repeating character
 */
function firstUniqChar (s) {
  let res = -1;
  let chars = {};
  for (let i = 0; i < s.length; i++) {
    if (chars.hasOwnProperty(s[i])) {
      chars[s[i]].push(i);
    } else {
      chars[s[i]] = [i];
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]].length === 1) {
      res = i;
      break;
    }
  }
  return res;
}