/**
 * Returns the kth positive integer that is missing from an array that is 
 * sorted in increasing order.
 * 
 * @param {number[]} arr - An array of numbers
 * @param {number} k - A number representing the amount of missing numbers
 * @returns {number} - Returns the kth missing positive integer
 */
function findKthPositive (arr, k) {
  let count = 0;
  let arrSet = new Set(arr);
  for (let i = 1; i < 2001; i++) {
    if (!arrSet.has(i)) {
      count++;
    }
    if (count === k) {
      return i;
    }
  }
}