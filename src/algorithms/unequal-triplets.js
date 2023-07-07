/**
 * This function takes in an array of positive integers nums, and returns the
 * number of triplets that meet the following conditions:
 *   • 0 <= i < j < k < nums.length.
 *   • nums[i], nums[j], and nums[k] are pairwise distinct (none of the three
 *     elements is equal to another).
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of unequal triplets in nums
 */
function unequalTriplets (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          count++;
        }
      }
    }
  }
  return count;
}