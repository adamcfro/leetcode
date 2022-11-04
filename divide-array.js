/**
 * Given an integer array nums consisting of 2 * n integers, 
 * returns true if nums can be divided into n pairs, false otherwise.
 *     • Each element belongs to exactly one pair.
 *     • The elements present in a pair are equal.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if nums can be divided into n pairs
 */
function divideArray (nums) {
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
  }
  for (const [key, value] of Object.entries(numCount)) {
    if (value % 2 !== 0) {
      return false;
    }
  }
  return true;
}