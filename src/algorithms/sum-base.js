/**
 * Given an integer n (in base 10) and a base k, returns the sum of the digits
 * of n after converting n from base 10 to base k.
 * 
 * After converting, each digit should be interpreted as a base 10 number, and
 * the sum should be returned in base 10.
 * 
 * @param {number} n - A positive number
 * @param {number} k - A number representing a base
 * @returns {number} - Returns the sum of the digits of n after conversion
 */
function sumBase (n, k) {
  let remainders = [];
  while (n !== 0) {
    remainders.push(n % k);
    n = Math.floor(n / k);
  }
  let sum = remainders.reduce((accumulator, curr) => {
    return accumulator + curr;
  }, 0);
  return sum;
}