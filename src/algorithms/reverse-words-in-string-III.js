/**
 * Given a string s, reverses the order of characters in each word within
 * a sentence while still preserving whitespace and initial word order.
 * 
 * @param {string} s - A string of characters
 * @returns {string} - Returns the string with each word reversed
 */
function reverseWords (s) {
  s = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    let temp = '';
    for (let j = s[i].length - 1; j >= 0; j--) {
      temp += s[i][j];
    }
    s[i] = temp;
  }
  return s.join(' ');
}