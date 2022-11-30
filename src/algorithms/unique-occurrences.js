/**
 * Given an array of integers arr, returns true if the number of occurrences
 * of each value in the array is unique, or false otherwise.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if the number of occurrences of each value
 *     in the array is unique
 */
function uniqueOccurrences (arr) {
  let numCount = {};
  let uniqueCount = new Set();
  for (const num of arr) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
  for (const [key, val] of Object.entries(numCount)) {
    if (!uniqueCount.has(val)) {
      uniqueCount.add(val);
    } else {
      return false;
    }
  }
  return true;
}