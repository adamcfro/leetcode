/**
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * @format
 * @param {number} x - A number parameter
 * @returns {number} - Returns the square root of x rounded down
 */

function mySqrt(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid ** 2;
    if (square <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
