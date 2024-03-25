/**
 * Given an m x n integer matrix matrix, if an element is 0, sets its entire
 * row and column to 0's. Done in place.
 *
 * @format
 * @param {number[][]} matrix - A 2D array of numbers
 * @returns {number[][]} - Returns a modified 2D array of numbers
 */

function setZeroes(matrix) {
  let rows = new Set();
  let columns = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }
  let len = Math.max(matrix.length, matrix[0].length);
  for (let i = 0; i < len; i++) {
    if (rows.has(i)) {
      let index = 0;
      while (index < matrix[i].length) {
        matrix[i][index] = 0;
        index++;
      }
    }
    if (columns.has(i)) {
      let index = 0;
      while (index < matrix.length) {
        matrix[index][i] = 0;
        index++;
      }
    }
  }
  return matrix;
}
