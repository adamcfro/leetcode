/**
 * Returns true if there exists two indices i and j such that i !== j,
 * and arr[i] === 2 * arr[j].
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if an integer and its double exist in array
 */
function checkIfExist (arr) {
  let numSet = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (numSet.has(arr[i] * 2)) {
      if (i !== arr.indexOf(arr[i] * 2)) {
        return true;
      }
    }
  }
  return false;
}