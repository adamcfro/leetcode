/**
 * Given an integer array nums, returns the third distinct maximum number. 
 * If the third maximum does not exist, returns the maximum number.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the third distinct maximum number from an array
 */
function thirdMax (nums) {
  let distinctNums = new Set();
  let thirdDistinctNum;
  for (let i = 0; i < nums.length; i++) {
    if (!distinctNums.has(nums[i])) {
      distinctNums.add(nums[i]);
    }
  }
  distinctNums = Array.from(distinctNums);
  distinctNums = distinctNums.sort((a, b) => a - b);
  if (distinctNums.length < 3) {
    thirdDistinctNum = distinctNums[distinctNums.length - 1]; 
  } else {
    thirdDistinctNum = distinctNums[distinctNums.length - 3];
  }
  return thirdDistinctNum;
}