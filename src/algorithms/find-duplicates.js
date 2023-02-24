/**
 * Given an integer array nums where each integer appears at most twice,
 * returns an array of all integers that appear twice.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @returns {number[]} - Returns an array of numbers that appear twice in nums
 */
function findDuplicates (nums) {
  let res = [];
  let elems = new Set();
  for (const num of nums) {
    if (!elems.has(num)) {
      elems.add(num);
    } else {
      res.push(num);
    }
  }
  return res;
}