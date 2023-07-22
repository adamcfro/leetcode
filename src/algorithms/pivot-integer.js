/**
 * Given a positive integer n, finds the integer x such that:
 *   • The sum of all elements between 1 and x inclusively equals the sum of all
 *     elements between x and n inclusively.
 * Returns the pivot integer x. If no such integer exists, returns -1.
 * 
 * @param {number} n - A positive number
 * @returns {number} - Returns the pivot number
 */
function pivotInteger (n) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    sum1 += i;
  }
  for (let pivot = n; pivot >= 0; pivot--) {
    sum2 += pivot;
    if (sum1 === sum2) {
      return pivot;
    }
    sum1 -= pivot;
  }
  return -1;
}