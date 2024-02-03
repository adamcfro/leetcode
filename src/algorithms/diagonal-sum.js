/**
 * Given a square matrix mat, returns the sum of the matrix diagonals.
 *
 * Includes the sum of all the elements on the primary diagonal and all the
 * elements on the secondary diagonal that are not part of the primary diagonal.
 *
 * @format
 * @param {number[][]} mat - A 2D array of numbers
 * @returns {number} - Returns the sum of primary and secondary diagonal numbers
 */

function diagonalSum(mat) {
  let sum = 0;
  let left = 0;
  let right = mat[0].length - 1;
  for (const row of mat) {
    if (left === right) {
      sum += row[left];
    } else {
      sum = sum + row[left] + row[right];
    }
    left++;
    right--;
  }
  return sum;
}
