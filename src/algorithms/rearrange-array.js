/**
 * Given an array of even length consisting of an equal number of positive and
 * negative numbers, rearranges the elements of nums such that:
 *     • The rearranged array begins with a positive integer.
 *     • Every consecutive pair of integers have opposite signs.
 *     • For all integers with the same sign, the order in which they were
 *       present in nums is preserved. 
 * 
 * @param {number[]} nums - An array of positive and negative numbers
 * @returns {number[]} - Returns a modified array
 */
function rearrangeArray (nums) {
  let pos = [];
  let neg = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  for (let i = 0; i < pos.length; i++) {
    res.push(pos[i], neg[i]);
  }
  return res;
}