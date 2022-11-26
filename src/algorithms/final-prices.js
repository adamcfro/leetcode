/**
 * Given an integer array prices where prices[i] is the price of the ith item,
 * returns the array after considering the discounts the shop provides.
 * 
 * A discount is applied to prices[i] when prices[j] is the minimum index
 * after i where prices[j] <= prices[i].
 * 
 * @param {number[]} prices - An array of prices
 * @returns {number[]} - Returns a modified array
 */
function finalPrices (prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }
  return prices;
}