/**
 * You are given an integer array nums of length n. A partition is defined as
 * an index i where 0 <= i < n - 1, splitting the array into two non-empty
 * subarrays such that:
 * • Left subarray contains indices [0, i].
 * • Right subarray contains indices [i + 1, n - 1].
 * Return the number of partitions where the difference between the sum of the
 * left and right subarrays is even.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - Returns a count of partitions that meet criteria.
 */

function countPartitions(nums) {
  let count = 0;
  let left = 0;
  let right = 0;
  for (const num of nums) {
    right += num;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];
    if (Math.abs(left - right) % 2 === 0) {
      count++;
    }
  }
  return count;
}
