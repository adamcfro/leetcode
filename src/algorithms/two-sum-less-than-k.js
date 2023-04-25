/**
 * Given an array nums of integers and integer k, returns thee maximum sum such
 * that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no
 * conditions exist to satisfy this, returns -1 instead.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @param {number} k - A target number
 * @returns {number} - Returns the max sum of two numbers that is less than k
 */
function twoSumLessThanK (nums, k) {
  let sum = -1;
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => {
    return a - b;
  });
  while (left < right) {
    let tempSum = nums[left] + nums[right];
    if (tempSum > sum && tempSum < k) {
      sum = tempSum;
    } else if (tempSum >= k) {
      right--;
    } else {
      left++;
    }
  }
  return sum;
}