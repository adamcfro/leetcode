/**
 * Given an integer array of size n, finds all elements that appear more than
 * |n / 3| times and returns them in an array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers that appear more than
 *     |n / 3| times.
 */
function majorityElement (nums) {
  let res = [];
  let numCount = {};
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
  for (const [key, val] of Object.entries(numCount)) {
    if (val > nums.length / 3) {
      res.push(Number(key));
    }
  }
  return res;
}