/**
 * Given an n x n matrix where each of the rows and columns is sorted in 
 * ascending order, return the kth smallest element in the matrix. Note that it 
 * is the kth smallest element in the sorted order, not the kth distinct 
 * element.
 * 
 * @param {number[][]} matrix - A 2D array of numbers
 * @param {number} k - A number respresenting the kth smallest element
 * @returns {number} - Returns the kth smallest element in matrix
 */
function kthSmallest (matrix, k) {
  let combinedArr = matrix[0];
  let i = 1;
  while (i < matrix.length) {
    combinedArr = combinedArr.concat(matrix[i]);
    i++;
  }
  combinedArr.sort((a, b) => a - b);
  return combinedArr[k - 1];
}