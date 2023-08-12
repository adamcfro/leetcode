/**
 * Given a string s consisting of uppercase English letters, removes any
 * occurrence of the substrings "AB" or "CD" from s. Note that the string
 * concatenates after removing the substring and could produces new "AB" or "CD"
 * substrings.
 * 
 * Returns the minimum possible length of the resulting string that can be
 * obtained.
 * 
 * @param {string} s - A string of uppercase English letters
 * @returns {number} - Returns the length of the resulting string
 */
function minLength (s) {
  let stack = ['0'];
  for (char of s) {
    if (char === 'B' && stack[stack.length - 1] === "A") {
      stack.pop();
    } else if (char === 'D' && stack[stack.length - 1] === 'C') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length - 1;
};