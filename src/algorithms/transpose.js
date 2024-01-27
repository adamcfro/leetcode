/**
 * Given a 2D integer array matrix, returns the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 * @format
 * @param {number[][]} matrix - A 2D array of numbers
 * @returns {number[][]} - Returns the transpose of matrix
 */

function transpose(matrix) {
  let res = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    res.push(col);
  }
  return res;
}
