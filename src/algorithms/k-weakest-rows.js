/**
 * You are given an m x n binary matrix mat of 1's (representing soldiers) and 
 * 0's (representing civilians). The soldiers are positioned in front of the 
 * civilians. That is, all the 1's will appear to the left of all the 0's in 
 * each row.
 * 
 * A row i is weaker than a row j if one of the following is true:
 * 
 * The number of soldiers in row i is less than the number of soldiers in row j.
 * Both rows have the same number of soldiers and i < j.
 * 
 * Return the indices of the k weakest rows in the matrix ordered from weakest 
 * to strongest.
 * 
 * @param {number[][]} mat - An array of arrays of numbers
 * @param {number} k - A number of results to target
 * @returns {number[]} - Returns the indices of the weakest rows
 */
function kWeakestRows (mat, k) {
  let res = [];
  let pairs = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        mat[i].splice(j);
        pairs.push([mat[i].length, i]);
        break;
      }
      if (mat[i][j + 1] === undefined) {
        pairs.push([mat[i].length, i]);
      }
    }
  }
  pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  let i = 0;
  while (res.length < k) {
    res.push(pairs[i][1]);
    i++;
  }
  return res;
}