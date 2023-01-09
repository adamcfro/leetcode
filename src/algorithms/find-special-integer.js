/**
 * Given a sorted array, finds the only number that occurs more than 25% of the
 * time in the array and returns that number.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns the number that appears more than 25% of the time
 */
function findSpecialInteger (arr) {
  let count = {};
  let len = arr.length / 4;
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > len) {
      return num;
    }
  }
}