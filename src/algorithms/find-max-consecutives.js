/**
 * Returns the maximum number of consecutive 1's in the array.
 * 
 * @param {number[]} nums - An array of numbers consisting of 0's and 1's
 * @returns {number} - Returns a count of maximum consecutive 1's in the array
 */
function findMaxConsecutives (nums) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      temp = 0;
    } else if (nums[i] === 1) {
      temp++;
    }
    if (temp > count) {
      count = temp;
    }
  }
  return count;
}