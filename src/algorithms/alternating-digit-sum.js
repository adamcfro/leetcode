/**
 * Returns the sum of all digits from n with the following rules:
 *     • The most significant digit (the leftmost) is assigned a positive sign.
 *     • Each other digit has an opposite sign to its adjacent digits.
 * 
 * @param {number} n - A positive number
 * @returns {number} - Returns a sum
 */
function alternatingDigitSum (n) {
  let sum = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      sum += Number(n[i]);
    } else {
      sum -= Number(n[i]);
    }
  }
  return sum;
}