/**
 * Given two arrays, returns the minimum product sum after rearranging the order
 * of elements in the arrays.
 * 
 * @param {number[]} nums1 - First array of numbers
 * @param {number[]} nums2 - Second array of numbers
 * @returns {number} - Returns the minimum product sum of two arrays
 */
function minProductSum (nums1, nums2) {
  let sum = 0;
  nums1.sort((a, b) => {
    return a - b;
  });
  nums2.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < nums1.length; i++) {
    sum += nums1[i] * nums2[i];
  }
  return sum;
}