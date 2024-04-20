/**
 * There is an m x n matrix that is initialized to all 0's. There is also a 2D
 * array indices where each indices[i] = [ri, ci] represents a 0-indexed
 * location to perform some increment operations on the matrix.
 *
 * For each location indices[i], do both of the following:
 *   • Increment all the cells on row ri.
 *   • Increment all the cells on column ci.
 *
 * Given m, n, and indices, return the number of odd-valued cells in the matrix
 * after applying the increment to all locations in indices.
 *
 * @format
 * @param {number} m - A number of rows
 * @param {number} n - A number of columns
 * @param {number[][]} indices - A 2D array representing indices
 * @returns {number} - Returns the number of odd-valued cells after incrementing
 */

function oddCells(m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (const [i, j] of indices) {
    rows[i]++;
    cols[j]++;
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = rows[i] + cols[j];
      if (val % 2) res++;
    }
  }
  return res;
}
