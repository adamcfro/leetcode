/**
 * You are given two 2D integer arrays nums1 and nums2.
 *   • nums1[i] = [idi, vali] indicate that the number with the id idi has a
 *     value equal to vali.
 *   • nums2[i] = [idi, vali] indicate that the number with the id idi has a
 *     value equal to vali.
 * Each array contains unique ids and is sorted in ascending order by id.
 *
 * Merge the two arrays into one array that is sorted in ascending order by id,
 * respecting the following conditions:
 *   • Only ids that appear in at least one of the two arrays should be
 *     included in the resulting array.
 *   • Each id should be included only once and its value should be the sum of
 *     the values of this id in the two arrays. If the id does not exist in one
 *     of the two arrays then its value in that array is considered to be 0.
 *
 * Return the resulting array. The returned array must be sorted in ascending
 * order by id.
 *
 * @format
 * @param {number[][]} nums1 - A 2D array of numbers
 * @param {number[][]} nums2 - A 2D array of numbers
 * @returns {number[][]} - Returns a new 2D array sorted by id
 */

function mergeArrays(nums1, nums2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] === undefined) {
      res.push(nums2[j]);
      j++;
    } else if (nums2[j] === undefined) {
      res.push(nums1[i]);
      i++;
    } else if (nums1[i][0] < nums2[j][0]) {
      res.push(nums1[i]);
      i++;
    } else if (nums2[j][0] < nums1[i][0]) {
      res.push(nums2[j]);
      j++;
    } else {
      let sum = nums1[i][1] + nums2[j][1];
      res.push([nums1[i][0], sum]);
      i++;
      j++;
    }
  }
  return res;
}
