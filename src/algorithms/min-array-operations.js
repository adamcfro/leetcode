/**
 * Given an array of length n where arr[i] = (2 * i) + 1 for all valid values
 * of i, in one operation selects two different indices and subtracts 1 from
 * the number at one index while adding 1 to the other. This operation is
 * performed until all indices have equal elements. Returns the minimum number
 * of operations needed to make all elements of arr equal.
 * 
 * @param {number} n - The length of the array
 * @returns {number} - Returns a count of operations to make all elements equal
 */
function minOperations (n) {
  let operations = 0;
  let sum = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let curr = (2 * i) + 1;
    sum += curr;
    arr.push(curr);
  }
  let averageVal = sum / n;
  let middle = Math.floor(n / 2);
  for (let i = middle; i < arr.length; i++) {
    operations += arr[i] - averageVal;
  }
  return operations;
}