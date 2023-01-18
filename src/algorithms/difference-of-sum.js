/**
 * Takes in an integer array nums and returns the absolute difference between
 * the element sum and the digit sum of nums.
 *     • The element sum is the sum of all the elements in nums.
 *     • The digit sum is the sum of all the digits that appear in nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the absolute difference between the element sum
 *     and the digit sum
 */
function differenceOfSum (nums) {
  let elemSum = 0;
  let digitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    elemSum += nums[i];
    while (nums[i] !== 0) {
      digitSum += nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    }
  }
  return Math.abs(elemSum -  digitSum);
}