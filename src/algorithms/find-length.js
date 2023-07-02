/**
 * This function takes in an unsorted array of integers nums, and returns the 
 * length of the longest continuous increasing subsequence. The subsequence
 * must be strictly increasing.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the length of the longest continuous increasing
 *     subsequence
 */
function findLength (nums) {
  let longestSub = 1;
  let tempCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      tempCount++;
      if (tempCount > longestSub) {
        longestSub = tempCount;
      }
    } else {
      tempCount = 1;
    }
  }
  return longestSub;
}