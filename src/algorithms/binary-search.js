/**
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, searches for target in nums and returns its index if it
 * exists. Otherwise, returns -1.
 * 
 * @param {number[]} nums - An array of numbers sorted in ascending order
 * @param {number} target - A number to search for in nums
 * @returns {number} - Returns the index of target if it exists, -1 otherwise
 */
function search (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}