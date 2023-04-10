/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[', and 
 * ']', determines if the input string is valid. An input string is valid if:
 *     • Open brackets are closed by the same type of brackets.
 *     • Open brackets must be closed in the correct order.
 *     • Every close bracket has a corresponding open bracket of the same type.
 * 
 * @param {string} s - A string of parentheses
 * @returns {boolean} - Returns true if all parentheses are in the correct order
 */
function isValid (s) {
  let stack = [];
  for (const char of s) {
    const topOfStack = stack[stack.length - 1];
    if (char === ')') {
      if (topOfStack === '(') {
        stack.pop();
      } else {
        return false;
      }
    } else if (char === ']') {
      if (topOfStack === '[') {
        stack.pop();
      } else {
        return false;
      }
    } else if (char === '}') {
      if (topOfStack === '{') {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}