/**
 * Given an integer n, returns a string with n characters, such that each
 * character in the string occurs an odd number of times.
 * 
 * The returned string must contain only lowercase English letters.
 * If there are multiple valid strings, returns any of them.
 * 
 * @param {number} n - A positive whole number
 * @returns {string} - Returns a string of length n
 */
function generateTheString (n) {
  let res = '';
  if (n % 2 !== 0) {
    res += 'a'.repeat(n);
  } else {
    res += ('a'.repeat(n - 1)) + 'b';
  }
  return res;
}