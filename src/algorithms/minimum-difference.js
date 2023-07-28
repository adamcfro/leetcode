/**
 * This function takes an integer array nums, where nums[i] represents the score
 * of the ith student, and picks the scores of any k students from the array so
 * that the difference between the highest and the lowest of the k scores is
 * minimized.
 * 
 * Returns the minimum possible difference.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number of student scores
 * @returns {number} - Returns the minimum possible difference
 */
function minimumDifference (nums, k) {
  if (nums.length <= 1 || k === 1) {
    return 0;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  let res = nums[k - 1] - nums[0];
  for (let i = k; i < nums.length; i++) {
    res = Math.min(res, nums[i] - nums[i - k + 1]);
  }
  return res;
}