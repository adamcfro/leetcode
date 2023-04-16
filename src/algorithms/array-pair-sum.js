/**
 * Given an integer array nums of 2n integers, groups these integers into
 * n pairs, such that the sum of min(a[i], b[i]) for all i is maximized.
 * Returns the maximized sum.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a maximized sum for minimized pairings
 */
function arrayPairSum (nums) {
  let sum = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i += 2) {
    let a = nums[i];
    let b = nums[i + 1];
    sum += Math.min(a, b);
  }
  return sum;
}