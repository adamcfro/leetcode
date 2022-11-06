/**
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * returns an array of all the integers in the range [1, n] that do not
 * appear in nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers
 */
function findDisappearedNumbers (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
  }
  let disappearedNums = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!hash.hasOwnProperty(i)) {
      disappearedNums.push(i);
    }
  }
  return disappearedNums;
}