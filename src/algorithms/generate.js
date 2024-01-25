/**
 * Given an integer numRows, return the first numRows of Pascal's triangle. In
 * Pascal's triangle, each number is the sum of the two numbers directly above
 * it.
 *
 * @format
 * @param {number} numRows - A number of rows in Pascal's triangle
 * @returns {number[][]} - A 2D array of numbers
 */

function generate(numRows) {
  let res = [[1]];
  for (let currRow = 1; currRow < numRows; currRow++) {
    let newRow = [1];
    let prevRow = res[currRow - 1];
    for (let col = 1; col < currRow; col++) {
      newRow.push(prevRow[col - 1] + prevRow[col]);
    }
    newRow.push(1);
    res.push(newRow);
  }
  return res;
}
