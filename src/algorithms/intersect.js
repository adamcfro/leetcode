/**
 * Given two arrays, returns an array of their intersection. Each element in
 * the result must appear as many times as it shows in both arrays and the 
 * result may be returned in any order.
 * 
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @returns {number[]} - Returns the intersection of the two arrays
 */
function intersect (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let res = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }
  return res;
}