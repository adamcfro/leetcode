/**
 * You are given a string num consisting of only digits. A string of digits is
 * called balanced if the sum of the digits at even indices is equal to the sum
 * of digits at odd indices.
 *
 * Return true if num is balanced, otherwise return false.
 *
 * @format
 * @param {string} num - A string of digits.
 * @returns {boolean} - Returns true if digits summed at add even indices equal digits summed at odd indices.
 */

function isBalanced(num) {
  even = 0;
  odd = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      even += Number(num[i]);
    } else {
      odd += Number(num[i]);
    }
  }
  return even === odd;
}
