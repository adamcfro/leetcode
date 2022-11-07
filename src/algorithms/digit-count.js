/**
 * Given a string num of length n consisting of digits, returns true if for
 * every index i in the range 0 <= i < n, the digit i occurs num[i] times
 * in num, otherwise returns false.
 * 
 * @param {string} num - A string representation of a number
 * @returns {boolean} - Returns a boolean
 */
function digitCount (num) {
  let digits = {};
  for (let i = 0; i < num.length; i++) {
    digits[num[i]] = (digits[num[i]] || 0) + 1;
  }
  for (let i = 0; i < num.length; i++) {
    if (digits[i] === undefined && num[i] === '0') {
      continue;
    } else if (digits[i] !== Number(num[i])) {
      return false;
    }
  }
  return true;
}