/**
 * Given an integer array nums, returns 0 if the sum of the digits of the
 * minimum integer in nums is odd, or 1 otherwise.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns 0 if the minimum integer is odd, 1 otherwise
 */
function sumOfDigits (nums) {
  let sum = 0;
  let min = Math.min(...nums);
  while (min > 0) {
    sum += min % 10;
    min = Math.floor(min / 10);
  }
  return (sum + 1) % 2;
}