/**
 * Given an array of numbers, returns true if the array can be arranged to form
 * an arithmetic progression.
 * 
 * A sequence of numbers is called an arithmetic progression if the difference
 * between any two consecutive elements is the same.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if arr can be an arithmetic progression
 */
function arithmeticProgression (arr) {
  arr.sort((a, b) => a - b);
  if (arr.length < 3) {
    return true;
  }
  let difference = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== difference) {
      return false;
    }
  }
  return true;
}