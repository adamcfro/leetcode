/**
 * There are n buildings in a line. You are given an integer array heights of
 * size n that represents the heights of the buildings in the line. The ocean
 * is to the right of the buildings. A building has an ocean view if the
 * building can see the ocean without obstructions. Formally, a building has an
 * ocean view if all the buildings to its right have a smaller height.
 *
 * Returns a list of indices (0-indexed) of buildings that have an ocean view,
 * sorted in increasing order.
 *
 * @format
 * @param {number[]} heights - An array of numbers representing building heights
 * @returns {number[]} - Returns an array of indices of buildings with a view
 */

function findBuildings(heights) {
  let res = [];
  let tallestBuilding = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > tallestBuilding) {
      res.push(i);
    }
    tallestBuilding = Math.max(heights[i], tallestBuilding);
  }
  res.sort((a, b) => a - b);
  return res;
}
