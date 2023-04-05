/**
 * Given an integer array nums, creates a 2D array from nums satisfying the
 * following conditions:
 *     • The 2D array should contain only the elements of the array nums.
 *     • Each row in the 2D array contains distinct integers.
 *     • The number of rows in the 2D array should be minimal.
 * Returns the resulting array.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @returns {number[][]} - Returns an array of arrays with distinct numbers
 */
function findMatrix (nums) {
  let res = [];
  let temp = [];
  let numCount = {};
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
  while (Object.keys(numCount).length !== 0) {
    for (const key of Object.keys(numCount)) {
      temp.push(Number(key));
      numCount[key]--;
      if (numCount[key] === 0) {
        delete numCount[key];
      }
    }
    res.push(temp);
    temp = [];
  }
  return res;
}