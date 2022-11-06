/**
 * Given a valid parentheses string represented as string s,
 * returns the nesting depth of s.
 * 
 * A valid parentheses string is a string that, for every left parenthesis,
 * there is also a corresponding right parenthesis in the string.
 * 
 * @param {string} s - A string parameter
 * @returns {number} - Returns the max nesting depth of s
 */
function maxDepth (s) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      stack.pop();
    }
    count = Math.max(count, stack.length);
  }
  return count;
}