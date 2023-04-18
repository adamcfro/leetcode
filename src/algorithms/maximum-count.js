/**
 * Given an array nums sorted in increasing order, returns the number of 
 * positive integers if there are more positive numbers than negative, otherwise
 * returns the number of negative numbers.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the max number between the number of positive
 *     numbers and negative numbers
 */
function maximumCount (nums) {
  let pos = 0;
  let neg = 0;
  for (const num of nums) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    }
  }
  return Math.max(pos, neg);
}