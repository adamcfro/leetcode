/**
 * Given a 0-indexed integer array nums, returns true if it can be made
 * strictly increasing after removing exactly one element, or false otherwise.
 * If the array is already strictly increasing, returns true.
 *
 * The array nums is strictly increasing if nums[i - 1] < nums[i] for each
 * index (1 <= i < nums.length).
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if the array is strictly increasing after
 *   removing one or fewer elements
 */

function canBeIncreasing(nums) {
  let count = 0;
  for (let i = 1; i < nums.length && count < 2; i++) {
    if (nums[i - 1] >= nums[i]) {
      count++;
      if (i > 1 && nums[i - 2] >= nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return count < 2;
}
