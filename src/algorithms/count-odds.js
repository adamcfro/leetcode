/**
 * Given two non-negative integers low and high, returns the count of odd
 * numbers between low and high (inclusive).
 * 
 * @param {number} low - A positive starting number
 * @param {number} high - A positive ending number
 * @returns {number} - Returns a count of odd numbers between low and high
 */
function countOdds (low, high) {
  let range = high - low + 1;
  let count = low % 2 === 1 ? Math.ceil(range / 2) : Math.floor(range / 2);
  return count;
}