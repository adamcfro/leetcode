/**
 * Given an integer array nums and an integer key, counts the occurrences of
 * numbers that immediately follow key, and returns the number with the most
 * occurrences.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} key - A key number in the array
 * @returns {number} - Returns the number with the most occurrences after key
 */
function mostFrequent (nums, key) {
  let count = {};
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      count[nums[i + 1]] = (count[nums[i + 1]] || 0) + 1;
    }
  }
  let max = Object.keys(count).reduce((a, b) => {
    return count[a] > count[b] ? a : b;
  });
  return Number(max);
}