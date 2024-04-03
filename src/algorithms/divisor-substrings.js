/**
 * The k-beauty of an integer num is defined as the number of substrings of num
 * when it is read as a string that meet the following conditions:
 *   • It has a length of k.
 *   • It is a divisor of num.
 * Given integers num and k, returns the k-beauty of num.
 *
 * Note:
 *   • Leading zeros are allowed.
 *   • 0 is not a divisor of any value.
 *   • A substring is a contiguous sequence of characters in a string.
 *
 * @format
 * @param {number} num - A positive number
 * @param {number} k - A number representing the length of a substring
 * @returns {number} - Returns the k-beauty of num
 */

function divisorSubstrings(num, k) {
  let count = 0;
  const strNum = String(num);
  for (let i = 0; i < strNum.length + 1 - k; i++) {
    if (num % Number(strNum.slice(i, i + k)) === 0) {
      count++;
    }
  }
  return count;
}
