/**
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, 
 * where A and B are valid parentheses strings, and + represents string 
 * concatenation. For example, "", "()", "(())()", and "(()(()))" are all valid 
 * parentheses strings.
 * 
 * A valid parentheses string s is primitive if it is non-empty, and there does 
 * not exist a way to split it into s = A + B, with A and B nonempty valid 
 * parentheses strings.
 * 
 * Given a valid parentheses string s, consider its primitive decomposition: 
 * s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 * 
 * Returns s after removing the outermost parentheses of every primitive string 
 * in the primitive decomposition of s.
 * 
 * @param {string} s - A string made up of left and right parentheses
 * @returns {string} - Return a modified string
 */
function removeOuterParentheses (s) {
  let res = '';
  let count = 0;
  for (const char of s) {
    if (char === '(' && count === 0) {
      count++;
    } else if (char === '(' && count > 0) {
      res += char;
      count++;
    } else if (char === ')' && count > 1) {
      res += char;
      count--;
    } else if (char === ')' && count === 1) {
      count--;
    }
  }
  return res;
}