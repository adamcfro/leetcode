/**
 * Given an m x n binary matrix mat, finds the 0-indexed position of the row
 * that contains the maximum count of ones, and the number of ones in that row.
 * Returns an array containing the index of the row and the number of ones in
 * it. In case there are multiple rows that have the maximum count of ones,
 * the row with the smallest row number will be returned.
 * 
 * @param {number[][]} mat - An array of number arrays
 * @returns {number[]} - Returns an array of the row number and number of ones
 *     in that row
 */
function maxOnes (mat) {
  let res = [0, 0];
  for (let i = 0; i < mat.length; i++) {
    let temp = [i, 0];
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        temp[1] += 1;
        if (temp[1] > res[1]) {
          res = temp;
        }
      }
    }
  }
  return res;
}