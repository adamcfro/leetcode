/**
 * Given two positive integers a and b, returns the count of numbers having
 * unique digits in the range [a, b] (inclusive).
 *
 * @format
 * @param {number} a - The lower end of a range
 * @param {number} b - The upper end of a range
 * @returns {number} - Returns a count of numbers whose digits are all unique
 */

function numberCount(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    let curr = i;
    let digits = new Set();
    while (curr !== 0) {
      let digit = curr % 10;
      if (digits.has(digit)) {
        break;
      } else {
        digits.add(digit);
        curr = Math.floor(curr / 10);
        if (curr === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
