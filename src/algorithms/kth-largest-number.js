/**
 * Given an array of strings nums and an integer k where each string in nums 
 * represents an integer without leading zeros, returns the string that 
 * represents the kth largest integer in nums.
 * 
 * Note: Duplicate numbers should be counted distinctly. For example, if nums 
 * is ["1","2","2"], "2" is the first largest integer, "2" is the 
 * second-largest integer, and "1" is the third-largest integer.
 * 
 * @param {string[]} nums - An array of strings representing numbers
 * @param {number} k - A number representing the kth largest integer
 * @returns {string} - Returns string representing the kth largest integer
 */
function kthLargestNumber (nums, k) {
  nums.sort((a, b) => BigInt(a) < BigInt(b) ? 1 : BigInt(a) > BigInt(b) ? -1 : 0);
  return nums[k - 1];
}