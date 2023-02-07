/**
 * Returns true if arr can be made to equal target or false otherwise.
 * 
 * @param {number[]} target - An array of numbers
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if arrays can be made equal
 */
function canBeEqual (target, arr) {
  let hash = {};
  for (let i = 0; i < target.length; i++) {
    hash[target[i]] = (hash[target[i]] || 0) + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) - 1;
  }
  for (const val of Object.values(hash)) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
}