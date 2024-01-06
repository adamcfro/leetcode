/**
 * Given an m x n matrix grid consisting of positive integers, performs the
 * following operation until grid becomes empty:
 *   • Deletes the element with the greatest value from each row. If multiple
 *     such elements exist, deletes any of them.
 *   • Adds the maximum of deleted elements to the answer.
 * Returns the answer after performing the operations described above.
 *
 * Note that the number of columns decreases by one after each operation.
 *
 * @format
 * @param {number[][]} grid - A 2D array of numbers
 * @returns {number} - Returns the sum of the greatest elements from each row
 */

function deleteGreatestValue(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => {
      return b - a;
    });
  }
  for (let i = 0; i < columns; i++) {
    let curr = 0;
    for (let j = 0; j < rows; j++) {
      curr = Math.max(grid[j][i], curr);
    }
    sum += curr;
  }
  return sum;
}
