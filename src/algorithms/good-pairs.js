/**
 * You are given 2 integer arrays nums1 and nums2 of lengths n and m
 * respectively. You are also given a positive integer k. A pair (i, j) is
 * called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1,
 * 0 <= j <= m - 1).
 *
 * Return the total number of good pairs.
 *
 * @format
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @returns {number} - Returns a count of the number of good pairs
 */

function goodPairs(nums1, nums2) {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        count++;
      }
    }
  }
  return count;
}
