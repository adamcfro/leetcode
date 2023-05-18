/**
 * Given an array and a chunk size, returns a chunked array. A chunked array
 * contains the original elements in arr, but consists of subarrays each of
 * length size. The length of the last subarray may be less than size if
 * arr.length is not evenly divisible by size.
 * 
 * @param {number[]} arr - An array of numbers
 * @param {number} size - A number representing the size of a chunk
 * @returns {number[][]} - Returns an array (of arrays) of numbers
 */
function chunk (arr, size) {
  let res = [];
  let index = 0;
  while (index < arr.length) {
    res.push(arr.slice(index, index + size));
    index += size;
  }
  return res;
}