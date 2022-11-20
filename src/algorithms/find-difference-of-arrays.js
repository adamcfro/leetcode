/**
 * Given two integer arrays, returns a list answer of size 2 where:
 *     • answer[0] is a list of all distinct integers in nums1 which are not
 *       present in nums2.
 *     • answer[1] is a list of all distinct integers in nums2 which are not
 *       present in nums1.
 * 
 * @param {number[]} nums1 - First array of numbers 
 * @param {number[]} nums2 - Second array of numbers
 * @returns {number[][]} - Returns an array of arrays of numbers
 */
function findDifference (nums1, nums2) {
  let res = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (const num of set1) {
    if (!set2.has(num)) {
      res[0].push(num);
    }
  }
  for (const num of set2) {
    if (!set1.has(num)) {
      res[1].push(num);
    }
  }
  return res;
}