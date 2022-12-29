/**
 * A shop is selling candies at a discount. For every two candies sold, the shop
 * gives a third candy of lesser value for free.
 * 
 * Given an integer array cost, where cost[i] denotes the cost of the ith candy,
 * returns the minimum cost of buying all the candies.
 * 
 * @param {number[]} cost - An array of candy prices
 * @returns {number} - Returns the total cost to purchase all the candy
 */
function minimumCost (cost) {
  let res = 0;
  cost.sort((a, b) => {
    return b - a;
  })
  let index = 1;
  for (const val of cost) {
    if (index % 3 !== 0) {
      res += val;
    }
    index++;
  }
  return res;
}