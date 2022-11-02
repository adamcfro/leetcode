/**
 * Given a matrix grid which is sorted in non-increasing order both row-wise
 * and column-wise, returns the number of negative numbers in grid.
 * 
 * @param {number[][]} grid - An array of number arrays
 * @returns {number} - Returns a count of negative numbers in the matrix
 */
function countNegatives (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}