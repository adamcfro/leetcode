/**
 * This function takes in an array prices where prices[i] is the prices of a 
 * given stock on the ith day. On each day, stock can be bought or sold. Only
 * one share may be held at any time. However, stocks can be bought and
 * immediately sold on the same day.
 * 
 * Returns the maximum achievable profit.
 * 
 * @param {number[]} prices - An array of number representing prices
 * @return {number} - Returns the max profit from buying and selling stocks
 */
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};