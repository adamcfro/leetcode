/**
 * Given an integer array nums, rotate the array to the right by k steps,
 * where k is non-negative.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A non-negative number
 * @returns {number[]} - Returns a rotated array
 */
function rotateArray (nums, k) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
  return arr;
}