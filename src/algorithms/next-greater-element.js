/**
 * Returns an array res of length nums1.length, such that res[i] is the next
 * greater element.
 * 
 * The next greater element of some element x in an array is the first greater 
 * element that is to the right of x in the same array. If there is no next
 * greater element, then the answer for this query is -1.
 * 
 * @param {number[]} nums1 - An array of numbers that are a subset of nums2
 * @param {number[]} nums2 - An array of numbers
 * @returns {number[]} - Returns an array of the next greater elements
 */
function nextGreaterElement (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let elem = -1;
    for (let j = index; j < nums2.length; j++) {
      if (nums2[j + 1] > nums2[index]) {
        elem = nums2[j + 1];
        break;
      }
    }
    res.push(elem);
  }
  return res;
}