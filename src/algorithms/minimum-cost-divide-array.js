/**
 * Given an array of integers nums of length n, where the cost of an array is
 * the value of its first element, divides nums into 3 disjoint contiguous
 * subarrays and returns the minimum possible sum of the cost of these
 * subarrays.
 *
 * For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the sum of the cost of three subarrays
 */

function minimumCost(nums) {
  let minNum1 = Infinity;
  let minNum2 = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNum1) {
      minNum2 = minNum1;
      minNum1 = nums[i];
    } else if (nums[i] < minNum2) {
      minNum2 = nums[i];
    }
  }
  return nums[0] + minNum1 + minNum2;
}
