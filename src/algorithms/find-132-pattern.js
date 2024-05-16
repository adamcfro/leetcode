/**
 * Given an array of n integers nums, a 132 pattern is a subsequence of three
 * integers nums[i], nums[j] and nums[k] such that:
 *   • i < j < k and nums[i] < nums[k] < nums[j].
 * Return true if there is a 132 pattern in nums, otherwise, return false.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if there is a 132 pattern in nums
 */

function find132Pattern(nums) {
  let m = -Infinity;
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (nums[i] > stack[stack.length - 1]) {
      m = stack.pop();
    }
    if (nums[i] < m) {
      return true;
    }
    stack.push(nums[i]);
  }
  return false;
}
