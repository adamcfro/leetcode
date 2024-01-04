/**
 * Given a 0-indexed array nums consisting of positive integers where there are
 * two types of operations that can be applied on the array any number of times:
 *   • Choose two elements with equal values and delete them from the array.
 *   • Choose three elements with equal values and delete them from the array.
 * Returns the minimum number of operations required to make the array empty,
 * or -1 if it is not possible.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of operations to make the array empty
 */

function minOperations(nums) {
  let count = 0;
  let occurrences = {};
  for (const num of nums) {
    occurrences[num] = (occurrences[num] || 0) + 1;
  }
  for (const val of Object.values(occurrences)) {
    let value = val;
    if (value === 1) {
      return -1;
    }
    count += Math.floor(value / 3);
    if (value % 3 !== 0) {
      count++;
    }
  }
  return count;
}
