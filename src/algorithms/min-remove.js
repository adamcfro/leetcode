/**
 * Given a string s of '(' , ')' and lowercase English characters, removes the 
 * minimum number of parentheses in any position so that the resulting 
 * parentheses string is valid. Returns any valid string.
 * 
 * Formally, a parentheses string is valid if and only if:
 *     • It is the empty string, or 
 *     • It contains only lowercase characters, or
 *     • It can be written as AB (A concatenated with B), where A and B are 
 *       valid strings, or
 *     • It can be written as (A), where A is a valid string.
 * 
 * @param {string} s - A string of lowercase English letters or parentheses
 * @returns {string} - Returns a modified string
 */
function minRemoveToMakeValid (s) {
  let stack = [];
  let res = s.split('');
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === '(') {
      stack.push(i);
    } else if (current === ')') {
      if (stack.length === 0) {
        res[i] = '';
      } else {
        stack.pop();
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    let current = stack[i];
    res[current] = '';
  }
  return res.join('');
}