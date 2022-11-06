/**
 * Given an integer array nums and an integer val, remove all occurrences of
 * val in nums in-place. The relative order of the elements may be changed.
 * 
 * Returns the length of the modified array.
 * 
 * @param {Array} nums - An array of numbers
 * @param {number} val - A target value
 * @returns {number} - Returns the length of the modified array
 */
function removeElement (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}