/**
 * Given an array nums and an integer target, returns the number of pairs (i, j)
 * where 0 <= i < j < nums.length and nums[i] + nums[j] < target.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} target - A number that pairs should sum to less than
 * @returns {number} - Returns the number of pairs that sum to less than target
 */
function countPairs (nums, target) {
  let count = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}