/**
 * Given an integer array nums sorted in non-decreasing order, removes the
 * duplicates in-place, such that each element appears only once. The relative
 * order of the elements should be kept the same. Returns the length of the
 * modified array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the length of the modified array
 */
function removeDuplicates (nums) {
  let seenElements = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seenElements.has(nums[i])) {
      nums.splice(i, 1);
      i--;
    } else {
      seenElements.add(nums[i]);
    }
  }
  return nums.length;
}