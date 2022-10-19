/**
 * Given an integer number n, returns the difference between the product
 * of its digits and the sum of its digits.
 * 
 * @param {number} n - A number parameter
 * @returns {number} - Returns the difference between product and sum
 */
function subtractProductAndSum (n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    product *= n % 10;
    n = Math.floor(n / 10);
  }
  return product - sum;
}