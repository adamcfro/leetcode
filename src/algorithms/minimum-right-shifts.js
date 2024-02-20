/**
 * Given a 0-indexed array nums of length n containing distinct positive
 * integers, returns the minimum number of right shifts required to sort nums
 * and -1 if this is not possible.
 *
 * A right shift is defined as shifting the element at index i to
 * index (i + 1) % n, for all indices.
 *
 * @format
 * @param {number[]} nums - An array of distinct numbers
 * @returns {number} - Returns the minimum number of right shifts to sort nums
 */

function minimumRightShifts(nums) {
  let count = 0;
  let index = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      index = i;
    }
    if ((count > 0 && nums[i] > nums[0]) || count > 1) {
      return -1;
    }
  }
  return nums.length - index;
}
