/**
 * Given positive integers n and m, returns the integer num1 - num2.
 * num1 and num2 are defined as follows:
 *   • num1: The sum of all integers in the range [1, n] that are not divisible
 *     by m.
 *   • num2: The sum of all integers in the range [1, n] that are divisible by
 *     m.
 *
 * @param {number} n - A number representing the upper end of a range
 * @param {number} m - A divisor number
 * @returns {number} - Returns the number num1 - num2
 */
function differenceOfSums(n, m) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 1; i <= n; i++) {
    num1 = i % m !== 0 ? num1 + i : num1;
    num2 = i % m === 0 ? num2 + i : num2;
  }
  return num1 - num2;
}
