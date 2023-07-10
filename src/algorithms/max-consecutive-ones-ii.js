/**
 * Given a binary array nums, returns the maximum number of consecutive 1's in
 * the array, flipping at most one 0.
 * 
 * @param {number[]} nums - An array of 0's and 1's
 * @returns {number} - Returns the length of max consecutive 1's
 */
function findMaxConsecutiveOnes (nums) {
  let res = 0;
  let left = 0;
  let right = 0;
  let zeroes = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroes++;
    }
    while (zeroes === 2) {
      if (nums[left] === 0) {
        zeroes--;
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
}