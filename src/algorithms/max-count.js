/**
 * You are given an integer array banned and two integers n and maxSum. You are
 * choosing some number of integers following the below rules:
 * • The chosen integers have to be in the range [1, n].
 * • Each integer can be chosen at most once.
 * • The chosen integers should not be in the array banned.
 * • The sum of the chosen integers should not exceed maxSum.
 * Return the maximum number of integers you can choose following the mentioned
 * rules.
 *
 * @format
 * @param {number[]} banned - An array of numbers.
 * @param {number} n - A positive number.
 * @param {number} maxSum - A positive number.
 * @returns {number} - Returns a count of numbers.
 */

function maxCount(banned, n, maxSum) {
  count = 0;
  tempSum = 0;
  banned.sort((a, b) => a - b);
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i) && i + tempSum <= maxSum) {
      count++;
      tempSum += i;
    }
    if (tempSum >= maxSum) {
      break;
    }
  }
  return count;
}
