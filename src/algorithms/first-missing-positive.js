/**
 * Returns the smallest missing positive integer from an unsorted array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the smallest missing positive integer
 */
function firstMissingPositive (nums) {
  let numsSet = new Set(nums);
  for (let i = 1; i < nums.length + 2; i++) {
    if (!numsSet.has(i)) {
      return i;
    }
  }
} 