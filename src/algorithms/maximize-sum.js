/**
 * Given a 0-indexed integer array nums and an integer k, performs the 
 * following operation exactly k times in order to maximize the score:
 *     • Selects an element m from nums.
 *     • Removes the selected element m from the array.
 *     • Adds a new element with a value of m + 1 to the array.
 *     • Increases the score by m.
 * Returns the maximum score achievable after performing the operation exactly 
 * k times.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A number representing the number of operations to perform
 * @returns {number} - Returns the maximum sum after operations
 */
function maximizeSum (nums, k) {
  let sum = 0;
  let maxNum = Math.max(...nums);
  for (let i = 0; i < k; i++) {
    sum += maxNum + i;
  }
  return sum;
}