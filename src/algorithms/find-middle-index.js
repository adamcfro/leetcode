/**
 * Given a 0-indexed integer array nums, finds the leftmost middleIndex (i.e., 
 * the smallest amongst all the possible ones).
 * 
 * A middleIndex is an index where nums[0] + nums[1] + ... + nums
 * [middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums
 * [nums.length-1].
 * 
 * If middleIndex == 0, the left side sum is considered to be 0. Similarly, if 
 * middleIndex == nums.length - 1, the right side sum is considered to be 0.
 * 
 * Returns the leftmost middleIndex that satisfies the condition, or -1 if 
 * there is no such index.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the leftmost middle index
 */
function findMiddleIndex (nums) {
  let sum = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    sum -= nums[j];
    if (sum === current) {
      return j;
    }
    current += nums[j];
  }
  return -1;
}