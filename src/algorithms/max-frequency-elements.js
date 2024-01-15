/**
 * Given an array nums consisting of positive integers, returns the total
 * frequencies of elements in nums such that those elements all have the
 * maximum frequency.
 *
 * The frequency of an element is the number of occurrences of that element in
 * the array.
 *
 * @format
 * @param {number[]} nums - An array of positive numbers
 * @returns {number} - Returns the total number of elements with max frequency
 */

function maxFrequencyElements(nums) {
  let res = 0;
  let maxFrequency = 0;
  let occurrences = {};
  for (const num of nums) {
    occurrences[num] = (occurrences[num] || 0) + 1;
  }
  for (const val of Object.values(occurrences)) {
    if (val > maxFrequency) {
      maxFrequency = val;
      res = val;
    } else if (val === maxFrequency) {
      res += val;
    }
  }
  return res;
}
