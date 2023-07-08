/**
 * Given an array of integers arr, returns true if and only if it is a valid
 * mountain array.
 * 
 * An array is a mountain array if and only if:
 *   • arr.length >= 3
 *   • There exists some i with 0 < i < arr.length - 1 such that:
 *     • arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
 *     • arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if the array is a mountain array
 */
function validMountainArray (arr) {
  if (arr.length < 3) {
    return false;
  }
  if (arr[1] <= arr[0]) {
    return false;
  }
  let increasing = true;
  for (let i = 1; i < arr.length; i++) {
    if (increasing) {
      if (arr[i] === arr[i - 1]) {
        return false;
      } else if (arr[i] < arr[i - 1]) {
        increasing = false;
      }
    } else {
      if (arr[i] >= arr[i - 1]) {
        return false;
      }
    }
  }
  return increasing === false;
}