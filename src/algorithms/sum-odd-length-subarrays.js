/**
 * Given an array of positive integers arr, returns the sum of all possible
 * odd-length subarrays of arr.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns the sum of all odd-length subarrays
 */
function sumOddLengthSubarrays (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - i;
    let k = left * right;
    let odd = Math.floor((k + 1) / 2);
    sum += odd * arr[i];
  }
  return sum;
}