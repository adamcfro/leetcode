/**
 * Given a binary array nums, returns an array of booleans where answer[i] is 
 * true if xi is divisible by 5. 
 * 
 * We define xi as the number whose binary representation is the subarray 
 * nums [0..i] (from most-significant-bit to least-significant-bit).
 * For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
 * 
 * @param {number[]} nums - An array of 0's and 1's
 * @returns {boolean[]} - Returns an array of booleans
 */
function prefixesDivBy5 (nums) {
  debugger;
  let res = [];
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num = (num * 2 + nums[i]) % 5;
    res.push(num === 0);
  }
  return res;
};