/**
 * This function takes in an array of numbers and performs the following
 * operations on the array:
 *     • If nums[i] === nums[i + 1], multiplies nums[i] by 2 and sets 
 *       nums[i + 1] to 0. Otherwise, skips this operation.
 *     • After performing all operations, shifts all 0's to the end of array.
 * Returns the resulting array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns a new array
 */
function applyOperations (nums) {
  let res = [];
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
    if (nums[i] === 0) {
      zeros++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      res.push(nums[i]);
    }
  }
  while (zeros > 0) {
    res.push(0);
    zeros--;
  }
  return res;
}