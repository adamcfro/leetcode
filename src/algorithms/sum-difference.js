/**
 * Given an integer array nums, returns an array res where:
 *     • res.length === nums.length.
 *     • leftSum[i] is the sum of elements to the left of the index i in the
 *       array nums.
 *     • rightSum[i] is the sum of elements to the right of the index i in the
 *       array nums.
 *     • res[i] = Math.abs(leftSum[i] - rightSum[i]).
 * 
 * @param {number[]} nums - An array of positive numbers
 * @returns {number[]} - Returns a new array
 */
function leftRightDifference (nums) {
  let res = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    res.push(Math.abs(left - right));
    left += nums[i];
  }
  return res;
}