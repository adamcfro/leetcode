/**
 * Given an integer array nums and an integer k, returns the kth largest
 * element in the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - The kth largest element
 * @returns {number} - Returns the kth largest element in the array
 */
function findKthLargest (nums, k) {
  nums.sort((a, b) => {
    return b - a;
  });
  return nums[k - 1];
}