/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct
 * positive integers, returns the list of integers that are present in each
 * array of nums sorted in ascending order.
 * 
 * @param {number[][]} nums - An array of numbers arrays
 * @returns {number[]} - Returns an array of numbers present in all arrays
 */
function intersection (nums) {
  let res = [];
  let numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      numsCount[nums[i][j]] = (numsCount[nums[i][j]] || 0) + 1;
    }
  }
  for (const [key, val] of Object.entries(numsCount)) {
    if (val === nums.length) {
      res.push(Number(key));
    }
  }
  res.sort((a, b) => {
    return a - b;
  });
  return res;
}