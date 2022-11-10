/**
 * Given three integer arrays, returns a distinct array containing all the
 * values that are present in at least two out of the three arrays.
 * 
 * @param {number[]} nums1 - First array of numbers
 * @param {number[]} nums2 - Second array of numbers
 * @param {number[]} nums3 - Third array of numbers
 * @returns {number[]} - Returns an array of distinct values
 */
function twoOutOfThree (nums1, nums2, nums3) {
  let res = new Set();
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let set3 = new Set(nums3);
  set1.forEach(element => {
    if (set2.has(element) || set3.has(element)) {
      res.add(element);
    }
  });
  set2.forEach(element => {
    if (set3.has(element)) {
      res.add(element);
    }
  });
  return Array.from(res);
}