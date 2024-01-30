/**
 * Given an array nums, returns true if the array was originally sorted in
 * non-decreasing order, then rotated some number of positions (including
 * zero). Otherwise, returns false.
 *
 * There may be duplicates in the original array.
 *
 * Note: An array A rotated by x positions results in an array B of the same
 * length such that A[i] == B[(i+x) % A.length], where % is the modulo
 * operation.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if array was originally sorted
 */

function check(nums) {
  let count = 0;
  if (nums[nums.length - 1] > nums[0]) {
    count++;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return count <= 1;
}
