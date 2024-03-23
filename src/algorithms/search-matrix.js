/**
 * Searches for a value target in an m x n integer matrix matrix and returns
 * true if target is found. This matrix has the following properties:
 *   • Integers in each row are sorted in ascending from left to right.
 *   • Integers in each column are sorted in ascending from top to bottom.
 *
 * @format
 * @param {number[][]} matrix - A 2D array of numbers
 * @param {number} target - A target value
 * @returns {boolean} - Returns true if target is in matrix
 */

function searchMatrix(matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  while (i >= 0 && j < matrix[i].length) {
    let current = matrix[i][j];
    if (current === target) {
      return true;
    } else if (current > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
}
