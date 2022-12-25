/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * returns the only number in the range that is missing from the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the missing number from range
 */
function missingNumber (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}