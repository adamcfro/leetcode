/**
 * Given a positive integer n, returns the smallest positive integer that is a multiple of both 2 and n.
 * 
 * @param {number} n - A positive number
 * @returns {number} - Returns a positive number
 */
function smallestEvenMultiple (n) {
  return n % 2 === 0 ? n : n * 2;
}