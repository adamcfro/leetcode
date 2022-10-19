/**
 * Given an array of integers nums, returns the number of good pairs.
 * 
 * A pair (i, j) is called good if nums[i] === nums[j] and i < j.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of the number of good pairs
 */
function numIdenticalPairs (nums) {
  let goodPairs = 0;
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
  }
  for (const [key, value] of Object.entries(numCount)) {
    goodPairs += Math.floor(value * (value - 1) / 2);
  }
  return goodPairs;
}