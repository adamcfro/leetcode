/**
 * Given an array of integers nums, returns the count of how many of them
 * contain an even number of digits.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count
 */
function findNumbers (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let numDigits = 0;
    while (nums[i] > 0) {
      nums[i] = Math.floor(nums[i] / 10);
      numDigits++;
    }
    if (numDigits % 2 === 0) {
      count++;
    }
  }
  return count;
}