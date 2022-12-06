/**
 * Given an integer array weight where weight[i] is the weight of the ith apple,
 * returns the maximum number of apples you can put in the basket without
 * exceeding a weight of 5000.
 * 
 * @param {number[]} weight - An array of numbers representing apple weights
 * @returns {number} - Returns a count of apples that can fit in the basket
 */
function maxNumberOfApples (weight) {
  let count = 0;
  let totalWeight = 0;
  weight.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < weight.length; i++) {
    if (totalWeight + weight[i] <= 5000) {
      totalWeight += weight[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}