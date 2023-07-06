/**
 * Given a fixed-length integer array arr, duplicates each occurrence of zero,
 * shifting the remaining elements to the right. Returns the modified array.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number[]} - Returns a modified array of numbers
 */
function duplicateZeros (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.pop();
      arr.splice(i + 1, 0, 0);
      i++;
    }
  }
  return arr;
}