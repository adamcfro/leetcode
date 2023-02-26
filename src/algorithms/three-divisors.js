/**
 * Given an integer n, returns true if n has exactly three positive divisors.
 * Otherwise, returns false.
 * 
 * @param {number} n - A positive number
 * @returns {boolean} - Returns true if n has exactly 3 divisors
 */
function threeDivisors (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  }
  return false;
}