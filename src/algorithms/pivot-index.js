/**
 * Given an array of integers nums, calculates the pivot index of the array and
 * returns the index. Returns -1 if no such index exists.
 * 
 * The pivot index is the index where the sum of all the numbers to the left of 
 * the index is equal to the sum of all the numbers to the index's right.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns an index
 */
function pivotIndex (nums) {
  let right = 0;
  let left = 0;
  for (const num of nums) {
    right += num;
  }
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}