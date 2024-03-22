/**
 * Given an unsorted array of integers nums, returns the length of the longest
 * consecutive elements sequence.
 *
 * The algorithm must run in O(n) time.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the length of the longest consecutive sequence
 */

function longestConsecutive(nums) {
  let numSet = new Set();
  for (const num of nums) {
    numSet.add(num);
  }
  let longestSequence = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currNum = num;
      let currStreak = 1;
      while (numSet.has(currNum + 1)) {
        currNum++;
        currStreak++;
      }
      longestSequence = Math.max(longestSequence, currStreak);
    }
  }
  return longestSequence;
}
