/**
 * Given an integer n, returns true if and only if it is an Armstrong number.
 * 
 * The k-digit number n is an Armstrong number if and only if
 * the kth power of each digit sums to n.
 * 
 * @param {number} n - A number parameter
 * @returns {boolean} - Returns true if n is an Armstrong number
 */
function isArmstrong (n) {
  let num = n;
  let sum = 0;
  const power = String(n).length;
  while (num > 0) {
    sum += (num % 10) ** power;
    num = Math.floor(num / 10);
  }
  return n === sum;
}