/**
 * Given an array, returns the index i such that every element before 
 * arr[i] is smaller than arr[i] and is in ascending order, and every element
 * after arr[i] is smaller and in descending order.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns an index
 */
function peakIndexInMountainArray (arr) {
  let low = 1;
  let high = arr.length - 2;
  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);
    if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) {
      return middle;
    } else if (arr[middle] > arr[middle - 1]) {
      low = middle + 1;
    } else if (arr[middle] < arr[middle - 1]) {
      high = middle - 1;
    }
  }
  return -1;
}