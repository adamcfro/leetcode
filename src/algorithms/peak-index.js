/**
 * Given an array, returns the index i such that every element before 
 * arr[i] is smaller than arr[i] and is in ascending order, and every element
 * after arr[i] is smaller and in descending order.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns an index
 */
function peakIndexInMountainArray (arr) {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    } else if (arr[i] < arr[index]) {
      return index;
    }
  }
}