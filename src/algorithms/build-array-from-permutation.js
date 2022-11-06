/**
 * Given a zero-based permutation nums (0-indexed), builds an array ans of the
 * same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length
 * and returns it.
 * 
 * @param {number[]} nums - An array of distinct integers from 
 *     0 to nums.length - 1 (inclusive)
 * @returns {number[]} - Returns an array ans where ans[i] = nums[nums[i]]
 *     for each 0 <= i < nums.length
 */
function buildArray (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}