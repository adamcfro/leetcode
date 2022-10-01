/**
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *  3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * @param {string} s - A string containing only brackets
 * @returns {boolean} - Returns true if the brackets are in correct order
 */
function validParentheses (s) {
  let stack = [];
  let brackets = {'(': ')', '{': '}', '[': ']'};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) {
      stack.push(s[i]);
    } else {
      if (brackets[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length <= 0;
}