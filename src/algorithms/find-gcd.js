/**
 * Given an integer array nums, returns the greatest common divisor
 * of the smallest number and the largest number in nums.
 * 
 * The greatest common divisor of two numbers is the largest positive integer
 * that evenly divides both numbers.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the greatest common divisor
 */
function findGCD (nums) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }
  let gcd = 1;
  for (let i = 1; i <= nums[0]; i++) {
    if (min % i === 0 && max % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}