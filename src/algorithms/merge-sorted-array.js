/**
 * This function takes two integer arrays nums1 and nums2, sorted in 
 * non-decreasing order, and two integers m and n, representing the number of 
 * elements in nums1 and nums2 respectively, and merges nums1 and nums2 into a 
 * single array sorted in non-decreasing order. Returns the modified array.
 * 
 * @param {number[]} nums1 - An array of numbers
 * @param {number} m - The length of the nums1 array
 * @param {number[]} nums2 - An array of numbers
 * @param {number} n - The length of the nums2 array
 * @returns {number[]} - Returns nums1 after it has been modified
 */
function mergeSortedArray (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1;
}