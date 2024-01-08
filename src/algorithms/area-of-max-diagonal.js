/**
 * Given a 2D 0-indexed integer array dimensions, where dimensions[i][0]
 * represents the length and dimensions[i][1] represents the width of the
 * rectangle i, returns the area of the rectangle having the longest diagonal.
 * If there are multiple rectangles with the longest diagonal, returns the area
 * of the rectangle having the maximum area.
 *
 * @format
 * @param {number[][]} dimensions - A 2D array of numbers
 * @returns {number} - Returns the area of the rectangle with the maximum area
 */

function areaOfMaxDiagonal(dimensions) {
  let maxDiagonal = 0;
  let maxArea = 0;
  for (let i = 0; i < dimensions.length; i++) {
    const diagonal = Math.sqrt(dimensions[i][0] ** 2 + dimensions[i][1] ** 2);
    const area = dimensions[i][0] * dimensions[i][1];
    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
      maxArea = area;
    } else if (diagonal === maxDiagonal) {
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
}
