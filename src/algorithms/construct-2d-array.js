/**
 * You are given a 0-indexed 1-dimensional (1D) integer array original, and two
 * integers, m and n. You are tasked with creating a 2-dimensional (2D) array
 * with  m rows and n columns using all the elements from original.
 *
 * The elements from indices 0 to n - 1 (inclusive) of original should form the
 * first row of the constructed 2D array, the elements from indices n to
 * 2 * n - 1 (inclusive) should form the second row of the constructed 2D
 * array, and so on.
 *
 * Return an m x n 2D array constructed according to the above procedure, or an
 * empty 2D array if it is impossible.
 *
 * @format
 * @param {number[]} original - An array of numbers
 * @param {number} m - A number representing number of rows
 * @param {number} n - A number representing length of rows
 * @returns {number[][]} - Returns a 2D array of numbers
 */

function construct2DArray(original, m, n) {
  let res = [];
  let index = 0;
  let len = 0;
  while (index < original.length) {
    let row = [];
    while (len < n && index < original.length) {
      row.push(original[index]);
      len++;
      index++;
    }
    res.push(row);
    len = 0;
  }
  if (res[0].length !== n || res.length !== m) {
    return [];
  }
  return res;
}
