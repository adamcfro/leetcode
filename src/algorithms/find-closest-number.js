/**
 * Given an integer array nums of size n, returns the number with the value
 * closest to 0 in nums. If there are multiple answers, returns the number
 * with the largest value.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the number closest to 0
 */
function findClosestNumber (nums) {
  let res = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) <= Math.abs(res)) {
      if (Math.abs(nums[i]) === Math.abs(res)) {
        if (nums[i] > res) {
          res = nums[i];
        }
      } else {
        res = nums[i];
      }
    }
  }
  return res;
}