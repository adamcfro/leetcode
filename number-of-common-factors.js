/**
 * Given two positive integers a and b, returns the number of common factors
 * of a and b.
 * 
 * An integer x is a common factor of a and b if x divides both a and b.
 * 
 * @param {number} a - A positive number
 * @param {number} b - A positive number
 * @returns {number} - Returns a count of common factors
 */
function commonFactors (a, b) {
  count = 0;
  for (let i = 1; i <= Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }
  return count;
}