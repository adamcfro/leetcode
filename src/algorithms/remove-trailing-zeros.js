/**
 * Given a positive integer num represented as a string, returns the integer num
 * without trailing zeros as a string.
 * 
 * @param {string} num - A string representation of a positive number
 * @returns {string} - Returns num after removing trailing zeros
 */
function removeTrailingZeros (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== '0') {
      return num;
    } else {
      num = num.slice(0, i);
    }
  }
}