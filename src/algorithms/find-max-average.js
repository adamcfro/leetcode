/**
 * Given an integer array nums consisting of n elements, and an integer k,
 * finds a contiguous subarray whose length is equal to k that has the maximum
 * average value and returns this value.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number representing the length of a subarray
 */

function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let res = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(sum, res);
  }
  return res / k;
}
