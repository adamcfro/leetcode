/**
 * An ugly number is a positive integer whose prime factors are limited to
 * 2, 3, and 5. Given an integer n, returns true if n is an ugly number.
 * 
 * @param {number} n - A number parameter
 * @returns {boolean} - Returns true if n is an ugly number
 */
function isUgly (n) {
  if (n < 1) {
    return false;
  }
  let primes = [2, 3, 5];
  for (const prime of primes) {
    while (n % prime === 0) {
      n /= prime;
    }
  }
  return n === 1;
}