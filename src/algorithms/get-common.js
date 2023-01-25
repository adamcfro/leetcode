/**
 * Returns the minimum integer common to two arrays that are sorted in 
 * increasing order. If there is no common integer, returns -1.
 * 
 * @param {number[]} nums1 - First array of numbers
 * @param {number[]} nums2 - Second array of numbers
 * @returns {number} - Returns the minimum common integer
 */
function getCommon (nums1, nums2) {
  let res = -1;
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      return nums1[left];
    } else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return res;
}