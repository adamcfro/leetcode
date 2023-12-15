/**
 * You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and
 * m, respectively. Consider calculating the following values:
 *   • The number of indices i such that 0 <= i < n and nums1[i] occurs at
 *     least once in nums2.
 *   • The number of indices i such that 0 <= i < m and nums2[i] occurs at
 *     least once in nums1.
 * Returns an integer array answer of size 2 containing the two values in the
 * above order.
 *
 * @format
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @returns {number[]} - Returns an array of numbers
 */

function findIntersectionValues(nums1, nums2) {
  let res = [0, 0];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res[0]++;
        break;
      }
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]) {
        res[1]++;
        break;
      }
    }
  }
  return res;
}
