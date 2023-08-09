/**
 * Given two integer arrays, returns an array of their intersection. Each
 * element in the result must be unique and the result may be returned in any 
 * order.
 * 
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @returns {number[]} - Returns the intersection of the two arrays
 */
function intersection (nums1, nums2) {
  let uniqueNums = new Set();
  let res = new Set();
  for (let i = 0; i < nums1.length; i++) {
    uniqueNums.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (uniqueNums.has(nums2[i])) {
      res.add(nums2[i]);
    }
  }
  res = Array.from(res);
  return res;
}