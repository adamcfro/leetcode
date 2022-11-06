/**
 * Given two arrays of integers nums and index, returns a target array with
 * the following rules:
 *   • initially target array is empty
 *   • insert into target array nums[i] at index index[i]
 *   • repeat until there are no elements left to read
 *   • it is guaranteed that the insertion operations will be valid
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number[]} index - An array of numbers representing index positions
 * @returns {number[]} - Returns a new array
 */
function createTargetArray (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
}