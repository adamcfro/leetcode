/**
 * Given an integer array arr, returns true if there are three consecutive
 * odd numbers in the array. Returns false otherwise.
 * 
 * @param {number[]} arr - An array of positive numbers
 * @returns {boolean} - Returns true if array has three consecutive odd numbers
 */
function threeConsecutiveOdds (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 3) {
      return true;
    }
  }
  return false;
}