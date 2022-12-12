/**
 * Given the string s, the size of each group k, and the character fill, returns
 * a string array denoting the composition of every group s has been divided
 * into, using the steps below.
 * 
 * The string s can be partitioned into groups of size k using the following
 * procedure:
 *     • The first group consists of the first k characters of the string, the
 *       second group consists of the next k characters of the string, and so
 *       on. Each character can be a part of exactly one group.
 *     • For the last group, if the string does not have k characters remaining,
 *       a character fill is used to complete the group.
 * 
 * @param {string} s - A string of English characters
 * @param {number} k - The size of each grouping of characters
 * @param {string} fill - A character used to fill in remaining spaces for the
 *     last grouping
 * @returns {string[]} - Returns an array of strings
 */
function divideString (s, k, fill) {
  let res = [];
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    temp += s[i];
    if (temp.length === k) {
      res.push(temp);
      temp = '';
    }
    if (i + 1 === s.length && temp.length > 0) {
      while (temp.length < k) {
        temp += fill;
      }
      res.push(temp);
    }
  }
  return res;
}