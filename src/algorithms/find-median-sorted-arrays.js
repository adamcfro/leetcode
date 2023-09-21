/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * returns the median of the two sorted arrays.
 * 
 * @param {number[]} nums1 - An array of non-negative numbers
 * @param {number[]} nums2 - An array of non-negative numbers
 * @returns {number} - Returns the median of two sorted arrays
 */
function findMedianSortedArrays (nums1, nums2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  let len1 = nums1.length;
  let len2 = nums2.length;
  let middle = Math.floor((nums1.length + nums2.length) / 2);
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }
  while (i < len1) {
    mergedArr.push(nums1[i]);
    i++;
  }
  while (j < len2) {
    mergedArr.push(nums2[j]);
    j++;
  }
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
  } else {
    return mergedArr[middle];
  }
}