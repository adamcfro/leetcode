/**
 * Given an array of integers nums, sorts the array in increasing order based
 * on the frequency of the value. If multiple values have the same frequency,
 * sorts those values in decreasing order and returns the sorted array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a sorted array
 */
function frequencySort (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  let entries = Object.entries(count);
  entries.sort((a, b) => {
    return a[1] - b[1] || b[0] - a[0];
  });
  let res = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries[i][1]; j++) {
      res.push(entries[i][0]);
    }
  }
  return res;
}