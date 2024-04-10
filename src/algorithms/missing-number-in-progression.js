/**
 * In some array arr, the values were in arithmetic progression: the values
 * arr[i + 1] - arr[i] are all equal for every 0 <= i < arr.length - 1. A value
 * from arr was removed that was not the first or last value in the array.
 *
 * Given arr, returns the removed value.
 *
 * @format
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns the removed value
 */

function missingNumber(arr) {
  arr.sort((a, b) => a - b);
  let largestDifference = Math.abs(arr[1] - arr[0]);
  let res = arr[1] - largestDifference / 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > largestDifference) {
      largestDifference = arr[i] - arr[i - 1];
      return arr[i] - largestDifference / 2;
    }
  }
  return res;
}
