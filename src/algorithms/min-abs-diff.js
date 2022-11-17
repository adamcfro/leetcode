/**
 * Given an array of distinct integers arr, finds all pairs of elements with
 * the minimum absolute difference of any two elements, and returns a list
 * of pairs in ascending order.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number[][]} - Returns an array of array pairs
 */
function minimumAbsDifference (arr) {
  let minDiff = Math.abs(arr[0] - arr[1]);
  let res = [];
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < minDiff) {
      minDiff = Math.abs(arr[i] - arr[i + 1]);
      res = [];
      res.push([arr[i], arr[i + 1]]);
    } else if (Math.abs(arr[i] - arr[i + 1]) === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
}