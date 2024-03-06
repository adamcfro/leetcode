/**
 * Given n points on a 2D plane where points[i] = [xi, yi], returns the widest
 * vertical area between two points such that no points are inside the area.
 *
 * A vertical area is an area of fixed-width extending infinitely along the
 * y-axis (i.e., infinite height). The widest vertical area is the one with the
 * maximum width.
 *
 * Note that points on the edge of a vertical area are not considered included
 * in the area.
 *
 * @format
 * @param {number[][]} points - A 2D array of numbers representing points
 * @returns {number} - Returns the widest vertical area between two points
 */

function maxWidth(points) {
  let sortedArr = [];
  for (let i = 0; i < points.length; i++) {
    sortedArr.push(points[i][0]);
  }
  sortedArr.sort((a, b) => a - b);
  let width = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    width = Math.max(width, Math.abs(sortedArr[i - 1] - sortedArr[i]));
  }
  return width;
}
