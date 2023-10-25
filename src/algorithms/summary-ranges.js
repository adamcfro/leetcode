/**
 * Given a sorted unique integer array nums where a range [a,b] is the set of
 * all the integers from a to b (inclusive), returns the smallest sorted list
 * of ranges that cover all the numbers in the array exactly.
 *
 * Each range [a,b] in the list should be output as:
 *   • "a->b" if a !== b
 *   • "a" if a === b
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {string[]} - Returns an array of strings representing ranges
 */

function summaryRanges(nums) {
  let ranges = [];
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (start !== nums[i]) {
      ranges.push(`${start}->${nums[i]}`);
    } else {
      ranges.push(`${start}`);
    }
  }
  return ranges;
}
