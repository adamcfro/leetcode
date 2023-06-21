/**
 * Given an array arr and a function fn, returns a sorted array sortedArr.
 * 
 * You can assume fn only returns numbers and those numbers determine the sort
 * order of sortedArr, and sortedArr must be sorted in ascending order by fn
 * output. You may assume that fn will never duplicate numbers for a given 
 * array.
 * 
 * @param {Array} arr - An array of possibly mixed types
 * @param {Function} fn - A function that helps with sorting
 * @returns {Array} - Returns a sorted array
 */
function sortBy (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}