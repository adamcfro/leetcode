/**
 * Given an integer x, return true if x is a palindrome integer.
 * 
 * An integer is a palindrome when it reads the same backward and forward.
 *    • For example, 121 is a palindrome while 123 is not.
 * 
 * @param {number} num - A number parameter
 * @returns {boolean} - Returns true if num is a palindrome
 */
function isPalindrome (num) {
  if (num < 0) {
    return false;
  }
  let reverse = 0;
  for (let i = num; i >= 1; i = Math.floor(i / 10)) {
    reverse = reverse * 10 + i % 10;
  }
  return reverse === num;
}