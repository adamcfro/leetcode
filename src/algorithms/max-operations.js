/**
 * Given an array of integers called nums, performs the following operation
 * while nums contains at least 2 elements:
 *   • Takes the first two elements of nums and deletes them. The score of the
 *     operation is the sum of the deleted elements.
 * Returns the maximum number of operations possible such that all operations
 * have the same score.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of operations performed
 */

function maxOperations(nums) {
  let count = 1;
  if (nums.length <= 2) {
    return count;
  }
  const sum = nums[0] + nums[1];
  for (let i = 2; i < nums.length - 1; i += 2) {
    if (nums[i] + nums[i + 1] === sum) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
