/**
 * Given a string s consisting of lowercase letters, returns the final string
 * after removing all duplicate letters. 
 * 
 * Duplicate letters are adjacent and equal letters, and all such duplicates 
 * are removed until no duplicates remain.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {string} - Returns a string with no equal and adjacent letters
 */
function removeDuplicates (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
}