/**
 * Given an array nums of size n, finds the maximum difference between nums[i]
 * and nums[j], such that 0 <= i < j < n and nums[i] < nums[j].
 * 
 * @param {number[]} nums - An array of positive numbers
 * @returns {number} - Returns the max difference
 */
function maximumDifference (nums) {
  let maxDiff = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = nums[j] - nums[i];
      if (diff > maxDiff && diff !== 0) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}