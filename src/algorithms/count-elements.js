/**
 * Given an integer array nums, returns the number of elements that have both
 * a strictly smaller and a strictly greater element appear in nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of elements that have both strictly 
 *     greater and strictly smaller elements
 */
function countElements (nums) {
  let count = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  let min = nums[0];
  let max = nums[nums.length - 1];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > min && nums[i] < max) {
      count++;
    }
  }
  return count;
}