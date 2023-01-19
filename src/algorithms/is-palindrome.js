/**
 * Returns true if s is a palindrome, or false otherwise.
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into 
 * lowercase letters and removing all non-alphanumeric characters, it reads the 
 * same forward and backward. Alphanumeric characters include letters and 
 * numbers.
 * 
 * @param {string} s - A string of printable ASCII characters
 * @returns {boolean} - Returns true if s is a palindrome
 */
function isPalindrome (s) {
  let res = '';
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i);
    if ((curr >= 97 && curr <= 122) || (curr >= 48 && curr <= 57)) {
      res += s[i];
    }
  }
  let reverse = res.split('').reverse().join('');
  return res === reverse;
}