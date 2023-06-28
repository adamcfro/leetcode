/**
 * This function takes in an integer array nums and returns the minimum number
 * of moves to make every value in nums unique. In one move, takes one index i
 * where 0 <= i < nums.length and increments nums[i] by 1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of moves to make all numbers unique
 */
function minIncrementForUnique (nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] <= nums[i - 1]) {
      nums[i] += 1;
      count++;
    }
  }
  return count;
}