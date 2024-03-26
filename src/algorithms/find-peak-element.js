/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its
 * index. If the array contains multiple peaks, return the index to any of the
 * peaks.
 *
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is
 * always considered to be strictly greater than a neighbor that is outside the
 * array.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the index of the peak element
 */

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
