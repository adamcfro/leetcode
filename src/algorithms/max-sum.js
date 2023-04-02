/**
 * Given a bag that has items with a number 1, 0, or -1 written on each, picks
 * exactly k items among the available items and returns the maximum possible
 * sum of numbers written on the items.
 * 
 * @param {number} numOnes - A number representing 1's in the bag
 * @param {number} numZeros - A number representing 0's in the bag
 * @param {number} numNegOnes - A number representing -1's in the bag
 * @param {number} k - A number representing how many numbers to sum together
 * @returns {number} - Returns the maximum possible sum between k numbers
 */
function maxSum (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  while (k > 0) {
    if (numOnes > 0) {
      sum++;
      numOnes--;
    } else if (numZeros > 0) {
      numZeros--;
    } else {
      sum--;
    }
    k--;
  }
  return sum;
}