/**
 * Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix
 * called answer. Make answer equal to matrix, then replace each element with
 * the value -1 with the maximum element in its respective column.
 *
 * Return the matrix answer.
 *
 * @format
 * @param {number[][]} matrix - A 2D array of numbers
 * @returns {number[][]} - Returns a new 2D array with values of -1 replaced
 */

function modifiedMatrix(matrix) {
  let answer = [...matrix];
  for (let i = 0; i < matrix[0].length; i++) {
    let maxColumn = -1;
    let index = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > maxColumn) {
        maxColumn = matrix[j][i];
      }
      if (matrix[j][i] === -1) {
        index.push([j, i]);
      }
    }
    if (index.length > 0) {
      for (let k = 0; k < index.length; k++) {
        answer[index[k][0]][index[k][1]] = maxColumn;
      }
    }
  }
  return answer;
}
