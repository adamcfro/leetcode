/**
 * Given a 0-indexed 2D integer matrix grid of size n * n with values in the
 * range [1, n2], where each integer appears exactly once except a which
 * appears twice and b which is missing, finds and returns the repeating number
 * a and missing number b in the form [a, b].
 * @format
 * @param {number[][]} grid - A 2D array of numbers
 * @returns {number[]} - Returns an array with the repeated and missing numbers
 */

function findMissingAndRepeatedValues(grid) {
  let repeated;
  let seen = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (seen.has(grid[i][j])) {
        repeated = grid[i][j];
      } else {
        seen.add(grid[i][j]);
      }
    }
  }
  let arr = Array.from(seen);
  arr.sort((a, b) => {
    return a - b;
  });
  let missing;
  let curr = 1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== curr) {
      missing = curr;
    } else {
      curr++;
    }
  }
  return [repeated, missing];
}
