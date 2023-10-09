/**
 * Given an integer array nums of length n, returns the maximum sum score of
 * nums at any index. The sum score of nums at an index i is the max of:
 *   • The sum of the first i + 1 elements of nums, or
 *   • The sum of the last n - i elements of nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the maximum sum score of nums at any index
 */
function maximumSumScore (nums) {
  let maxScore = -Infinity;
  let firstElems = 0;
  let lastElems = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    firstElems += nums[i];
    maxScore = Math.max(maxScore, Math.max(firstElems, lastElems));
    lastElems -= nums[i];
  }
  return maxScore;
}