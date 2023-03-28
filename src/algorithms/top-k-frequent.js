/**
 * Given an integer array nums and an integer k, returns the k most frequent
 * elements in any order.
 * 
 * @param {number[]} nums - An array of numbers 
 * @param {number} k - The number of elements with the greatest frequency
 * @returns {number[]} - Returns an array of numbers with the greatest frequency
 */
function topKFrequent (nums, k) {
  let frequent = Array(k).fill([0, -Infinity]);
  let numCount = {};
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
  for (const [key, val] of Object.entries(numCount)) {
    if (val > frequent[frequent.length - 1][1]) {
      frequent[frequent.length - 1] = [key, val];
      frequent.sort((a, b) => {
        return b[1] - a[1];
      });
    }
  }
  let res = [];
  for (let i = 0; i < frequent.length; i++) {
    res.push(Number(frequent[i][0]));
  }
  return res;
}