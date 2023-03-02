/**
 * Given an integer array nums, returns the most frequent even element.
 * If there is a tie, returns the smallest one. If there is no such element,
 * returns -1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the most frequent smallest even number
 */
function mostFrequentEven (nums) {
  let count = {};
  for (const num of nums) {
    if (num % 2 === 0) {
      count[num] = (count[num] || 0) + 1;
    }
  }
  if (Object.keys(count).length === 0) {
    return -1;
  }
  let smallestEven = [0, 0];
  for (const [key, val] of Object.entries(count)) {
    if (val > smallestEven[1]) {
      smallestEven = [Number(key), Number(val)];
    }
  }
  return smallestEven[0];
}