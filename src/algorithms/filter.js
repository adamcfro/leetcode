/**
 * This callback is used to help filter elements.
 * 
 * @callback fn
 * @param {number} - A number from an array
 * @param {number} - An index number
 */

/**
 * Given an integer array arr and a filtering function fn, returns a new array
 * with a fewer or equal number of elements. The returned array should only
 * contain elements where fn(arr[i], i) evaluated to a truthy value.
 * 
 * @param {number[]} arr - An array of numbers
 * @param {fn} fn - A callback that helps with filtering
 * @returns - Returns a filtered array of numbers
 */
function filter (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};