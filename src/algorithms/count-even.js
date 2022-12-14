/**
 * Given a positive integer num, returns the number of positive integers less
 * than or equal to num whose digit sums are even.
 * 
 * The digit sum of a positive integer is the sum of all its digits.
 * 
 * @param {number} num - A positive number
 * @returns {number} - Returns a count of numbers whose digit sums are even
 */
function countEven (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let temp = i;
    while (temp !== 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
}