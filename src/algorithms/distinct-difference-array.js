/**
 * Given a 0-indexed array nums of length n, where the distinct difference 
 * array of nums is an array diff of length n such that diff[i] is equal to the 
 * number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted
 * from the number of distinct elements in the prefix nums[0, ..., i], returns 
 * the distinct difference array of nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns the distinct difference array of nums
 */
function distinctDifferenceArray (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let prefix = new Set(nums.slice(0, i + 1));
    let suffix = new Set(nums.slice(i + 1));
    res.push(prefix.size - suffix.size);
  }
  return res;
}