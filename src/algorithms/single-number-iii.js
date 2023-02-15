/**
 * Given an integer array nums in which exactly two elements appear only once
 * and all the other elements appear exactly twice, finds the two elements
 * that appear only once and returns them in an array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of elements that appear only once
 */
function singleNumber (nums) {
  let res = [];
  let hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }
  for (const [key, val] of Object.entries(hash)) {
    if (val === 1) {
      res.push(Number(key));
    }
  }
  return res;
}