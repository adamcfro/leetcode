/**
 * Given a sorted array consisting of only integers where every element
 * appears exactly twice, except for one element which appears exactly once,
 * returns the single element that appears only once.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the single element that appears only once
 */

function singleNonDuplicate(nums) {
  let start = 0;
  let end = nums.length;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid]) {
      return nums[mid];
    } else if (
      (mid % 2 === 1 && nums[mid] === nums[mid - 1]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return nums[start];
}
