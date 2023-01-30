/**
 * Returns true if n is strictly palindromic and false otherwise. 
 * 
 * A string is palindromic if it reads the same forward and backward. It is 
 * strictly palindromic if, for every base b between 2 and n - 2 (inclusive), 
 * the string representation of the integer n in base b is palindromic.
 * 
 * @param {number} n - A number between 4 and 10⁵ (inclusive)
 * @returns {boolean} - Returns true if n is strictly palindromic for every base
 */
function isStrictlyPalindromic (n) {
  for (let i = 2; i <= n - 2; i++) {
    let temp = n.toString(i);
    let reverseStr = temp.split('').reverse().join('');
    if (temp !== reverseStr) {
      return false;
    }
  }
  return true;
}