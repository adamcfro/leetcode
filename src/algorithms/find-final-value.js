/**
 * You are given an array of integers nums. You are also given an integer 
 * original which is the first number that needs to be searched for in nums.
 * You then do the following steps:
 *   • If original is found in nums, multiply it by two 
 *     (i.e., set original = 2 * original).
 *   • Otherwise, stop the process.
 *   • Repeat this process with the new number as long as you keep finding the 
 *     number.
 * Return the final value of original.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @param {number} original - A number to be searched for in nums
 * @returns - Returns the final value of original
 */
function findFinalValue (nums, original) {
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      original *= 2;
    }
  }
  return original;
}