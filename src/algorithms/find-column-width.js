/**
 * Given a 0-indexed m x n integer matrix grid where the width of a column is
 * the maximum length of its integers, returns an integer array ans of size n
 * where ans[i] is the width of the ith column.
 *   • For example, if grid = [[-10], [3], [12]], the width of the only column
 *     is 3 since -10 is of length 3.
 *   • The length of an integer x with len digits is equal to len if x is
 *     non-negative, and len + 1 otherwise.
 *
 * @format
 * @param {number[][]} grid - A 2D array of numbers
 * @returns {number[]} - Returns an array of numbers representing column lengths
 */

function findColumnWidth(grid) {
  let res = [];
  for (let i = 0; i < grid[0].length; i++) {
    let maxLength = 0;
    for (let j = 0; j < grid.length; j++) {
      let num = grid[j][i];
      let tempLength = 0;
      if (num < 0) {
        num *= -1;
        tempLength++;
      }
      if (num === 0) {
        tempLength++;
      } else {
        while (num !== 0) {
          num = Math.floor(num / 10);
          tempLength++;
        }
      }
      maxLength = Math.max(maxLength, tempLength);
    }
    res.push(maxLength);
  }
  return res;
}
