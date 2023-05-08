/**
 * This function takes in an integer array and a mapping function, and returns
 * a new array with a transformation applied to each element.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Function} fn - A mapping function
 * @returns {number[]} - Returns a modified array
 */
function applyTransform (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
}