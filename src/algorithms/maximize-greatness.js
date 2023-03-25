/**
 * Given an integer array nums where nums can be permuted into a new array perm,
 * and the greatness of nums is measured by the indices 0 <= i < nums.length
 * for which perm[i] > nums[i], returns the maximum possible greatness that
 * can be achieved after permuting nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of indices where perm[i] > nums[i]
 */
function maximizeGreatness (nums) {
  let count = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  let numsCopy = [...nums];
  let left = 0;
  let right = 0;
  while (left < nums.length && right < numsCopy.length) {
    if (numsCopy[right] > nums[left]) {
      count++;
      left++;
      right++;
    } else if (numsCopy[right] <= nums[left]) {
      right++;
    } else {
      left++;
    }
  }
  return count;
}