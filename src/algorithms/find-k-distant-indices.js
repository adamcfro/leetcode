/**
 * This function takes an integer array nums and two integers key and k, where 
 * a k-distant index is an inddex i of nums for which there exists at least one 
 * index j such that \i - j| <= k and nums[j] === key.
 * 
 * Returns a list of all k-distant indices sorted in increasing order.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @param {number} key - An integer from the array nums
 * @param {number} k - A positive number
 * @returns {number[]} - Returns a list of all k-distant indices
 */
function findKDistantIndices (nums, key, k) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let curr = -1;
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(i - j) <= k && nums[j] === key) {
        curr = i;
      }
    }
    if (curr !== -1) {
      res.push(curr);
    }
  }
  return res;
}