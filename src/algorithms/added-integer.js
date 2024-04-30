/**
 * Given two arrays of equal length where each element in nums1 has been
 * increased (or decreased in the case of negative) by an integer represented
 * by the variable x, returns the integer x that results in nums1 becoming
 * equal to nums2,
 *
 * @format
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @return {number} - Returns the number that is added to each element in nums1
 */

function addedInteger(nums1, nums2) {
  return Math.min(nums2) - Math.min(nums1);
}
