/**
 * Given an m x n matrix of distinct numbers, returns all lucky numbers in the
 * matrix in any order.
 *
 * A lucky number is an element of the matrix such that it is the minimum
 * element in its row and maximum in its column.
 *
 * @format
 * @param {number[][]} matrix - A 2D array of numbers
 * @return {number[]} - Returns an array of lucky numbers
 */

function luckyNumbers(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);
    let minindex = matrix[i].indexOf(min);
    let lucky = true;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][minindex] > min) {
        lucky = false;
        break;
      }
    }
    if (lucky == true) {
      return [min];
    }
  }
  return result;
}
