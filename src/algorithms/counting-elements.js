/**
 * Given an integer array arr, counts how many elements x there are, such that
 * x + 1 is also in  arr. If there are duplicates in  arr, counts them as well.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns a count of numbers equal to x + 1 in the array
 */
function countElements (arr) {
  let hashSet = new Set(arr);
  let count = 0;
  for (const num of arr) {
    if (hashSet.has(num + 1)) {
      count++;
    }
  }
  return count;
}