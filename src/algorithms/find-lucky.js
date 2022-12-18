/**
 * A lucky integer is an integer that has a frequency in the array that is
 * equal to its value.
 * 
 * Given an array of integers arr, returns the largest lucky integer in the
 * array. If there is no lucky integer, returns -1.
 * 
 * @param {array} arr - An array of numbers
 * @returns {number} - Returns the largest lucky integer
 */
function findLucky (arr) {
  let res = -1;
  let frequency = {};
  for (const int of arr) {
    frequency[int] = (frequency[int] || 0) + 1;
  }
  for (const [key, val] of Object.entries(frequency)) {
    if (Number(key) === val && val > res) {
      res = val;
    }
  }
  return res;
}