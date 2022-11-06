/**
 * Given a 0-indexed integer array nums and an integer k,
 * returns the number of pairs where nums[i] === nums[j]
 * and (i * j) is divisible by k.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number used for division
 * @returns {number} - Returns a count number
 */
function countPairs (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
}