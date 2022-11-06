/**
 * Given an integer array nums of length n, creates an array ans of length
 * 2n, where ans[i] === nums[i] and ans[i + n] === nums[i], and returns
 * the new array.
 * 
 * Specifically, ans is the concatenation of two nums arrays.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns the new concatenated array
 */
function getConcatenation (nums) {
  let ans = [];
  let count = 0;
  while (count < 2) {
    for (let i = 0; i < nums.length; i++) {
      ans.push(nums[i]);
      if (i === nums.length - 1) {
        count += 1;
      }
    }
  }
  return ans;
}