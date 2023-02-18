/**
 * Given an integer array nums, moves all 0's to the end of it while maintaining
 * the relative order of the non-zero elements. Returns the modified array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns a modified array
 */
function moveZeroes (nums) {
  let i = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[i] = num;
      i++;
    }
  }
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
  return nums;
}