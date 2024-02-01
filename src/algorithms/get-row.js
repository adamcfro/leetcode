/**
 * Given an integer rowIndex, returns the rowIndex (0-indexed) row of the
 * Pascal's Triangle.
 *
 * In Pascal's Triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * @format
 * @param {number} rowIndex - A number representing a row in Pascal's Triangle
 * @returns {number[]} - Returns the rowIndex row of Pascal's Triangle
 */

function getRow(rowIndex) {
  let triangle = [[1]];
  for (let row = 1; row <= rowIndex; row++) {
    const prevRow = row - 1;
    let tempRow = [1];
    for (let col = 1; col < triangle[prevRow].length; col++) {
      const sum = triangle[prevRow][col - 1] + triangle[prevRow][col];
      tempRow.push(sum);
    }
    tempRow.push(1);
    triangle.push(tempRow);
  }
  return triangle[rowIndex];
}
