/**
 * You are given a positive integer array nums. Partition nums into two arrays,
 * nums1 and nums2, such that:
 *   • Each element of the array nums belongs to either the array nums1 or the
 *     array nums2.
 *   • Both arrays are non-empty.
 *   • The value of the partition is minimized.
 * The value of the partition is |max(nums1) - min(nums2)|.
 *
 * Here, max(nums1) denotes the maximum element of the array nums1, and
 * min(nums2) denotes the minimum element of the array nums2.
 *
 * Return the integer denoting the value of such partition.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the value of the partition
 */

function findValueOfPartition(nums) {
  let res = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    res = Math.min(res, nums[i + 1] - nums[i]);
  }
  return res;
}
