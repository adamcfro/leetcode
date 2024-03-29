/**
 * Given an array arr, replaces every element in the array with the greatest
 * element among the elements to its right, and replaces the last element
 * with -1. Returns the modified array.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number[]} - Returns a modified array of numbers
 */
function replaceElements (arr) {
  let greatestElem = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > greatestElem) {
      let current = arr[i]
      arr[i] = greatestElem;
      greatestElem = current;
    } else {
      arr[i] = greatestElem;
    }
  }
  return arr;
}