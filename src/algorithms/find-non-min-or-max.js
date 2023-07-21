/**
 * Given an integer array nums containing distinct positive integers, finds and
 * returns any number from the array that is neither the minimum nor the
 * maximum value in the array, or -1 if there is no such number.
 * 
 * @param {number[]} nums - An array of positive and distinct numbers
 * @returns {number} - Returns any number that isn't the max or min in the array
 */
function findNonMinOrMax (nums) {
  if (nums.length <= 2) {
    return -1;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  return nums[Math.floor(nums.length / 2)];
}