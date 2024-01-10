/**
 * Given an array of integers arr, and three integers a, b and c, returns the
 * number of good triplets. A triplet (arr[i], arr[j], arr[k]) is good if the
 * following conditions are true ( |x| denotes the absolute value of x ):
 *   • 0 <= i < j < k < arr.length
 *   • |arr[i] - arr[j]| <= a
 *   • |arr[j] - arr[k]| <= b
 *   • |arr[i] - arr[k]| <= c
 *
 * @format
 * @param {number[]} arr - An array of numbers
 * @param {number} a - A number parameter
 * @param {number} b - A number parameter
 * @param {number} c - A number parameter
 * @returns {number} - Returns a count of good triplets
 */

function countGoodTriplets(arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
}
