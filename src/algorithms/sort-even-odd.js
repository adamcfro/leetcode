/**
 * Given an integer array nums, rearranges the values of nums by these rules:
 *     • sorts the values at odd indices of nums in decreasing order.
 *     • sorts the values at even indices of nums in increasing order.
 * 
 * Returns the array formed after rearranging the values of nums.
 * 
 * @param {number[]} nums - An  array of numbers
 * @returns {number[]} - Returns an array of numbers where values at odd indices
 *     are sorted in decreasing order and values at even indices are sorted in
 *     increasing order.
 */
function sortEvenOdd (nums) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 1) {
      odds.push(nums[i]);
    } else {
      evens.push(nums[i]);
    }
  }
  evens.sort((a, b) => {
    return a - b;
  })
  odds.sort((a, b) => {
    return b - a;
  })
  let res = [];
  for (let i = 0; i < evens.length || i < odds.length; i++) {
    if (evens[i] !== undefined) {
      res.push(evens[i]);
    }
    if (odds[i] !== undefined) {
      res.push(odds[i]);
    }
  }
  return res;
}