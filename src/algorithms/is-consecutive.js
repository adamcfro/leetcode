/**
 * Given an integer array nums, returns true if nums is consecutive, otherwise
 * returns false.
 * 
 * An array is consecutive if it has every number in the range [x, x + n - 1],
 * where x is the minimum number in the array and n is the length of the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if the array is consecutive
 */
function isConsecutive (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== min) {
      return false;
    }
    min++;
  }
  return true;
}