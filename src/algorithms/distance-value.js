/**
 * Given two integer arrays and the integer d, returns the distance value
 * between the two arrays.
 * 
 * The distance value is defined as the number of elements where the absolute
 * value of arr1[i] - arr2[j] <= d.
 * 
 * @param {number[]} arr1 - First array of numbers
 * @param {number[]} arr2 - Second array of numbers
 * @param {number} d - A target parameter
 * @returns {number} - Returns a count number
 */
function findTheDistanceValue (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        break;
      }
      if (j === arr2.length - 1) {
        count++;
      }
    }
  }
  return count;
}