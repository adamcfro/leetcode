/**
 * You are given a 2D matrix grid of size m x n. You need to check if each cell
 * grid[i][j] is:
 *   • Equal to the cell below it, i.e. grid[i][j] == grid[i + 1][j] (if it
 *     exists).
 *   • Different from the cell to its right, i.e. grid[i][j] != grid[i][j + 1]
 *     (if it exists).
 * Returns true if all the cells satisfy these conditions.
 *
 * @format
 * @param {number[][]} grid - A 2D array of numbers
 * @returns {boolean} - Returns true if description conditions are met
 */

function satisfiesConditions(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (
        (i > 0 && grid[i][j] !== grid[i - 1][j]) ||
        (j > 0 && grid[i][j] === grid[i][j - 1])
      ) {
        return false;
      }
    }
  }
  return true;
}
