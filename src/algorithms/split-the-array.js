/**
 * Given an integer array nums of even length, splits the
 * array into two parts nums1 and nums2 such that:
 *   • nums1.length == nums2.length == nums.length / 2.
 *   • nums1 should contain distinct elements.
 *   • nums2 should also contain distinct elements.
 * Returns true if it is possible to split the array, and false otherwise.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if it is possible to split the array
 */

function isPossibleToSplit(nums) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = (seen[nums[i]] || 0) + 1;
    if (seen[nums[i]] > 2) {
      return false;
    }
  }
  return true;
}
