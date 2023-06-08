/**
 * Given an integer array nums where the largest integer is unique, returns 
 * the index of the largest element in the array if the largest element is at 
 * least twice as much as every other element in the array. Returns -1 if no
 * such element exists.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns an index
 */
function dominantIndex (nums) {
  let sorted = [...nums];
  sorted = sorted.sort((a, b) => b - a);
  if (sorted[0] / 2 >= sorted[1]) {
    return nums.indexOf(sorted[0]);
  }
  return -1;
}