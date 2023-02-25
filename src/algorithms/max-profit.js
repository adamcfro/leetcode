/**
 * Given an array prices where prices[i] is the price of a given stock on the
 * ith day, maximizes the profit by choosing a day to buy stock and a different
 * day to sell stock, and returns the maximum profit that can be achieved.
 * If profit cannot be achieved, returns 0.
 * 
 * @param {number[]} prices - An array of numbers representing stock prices
 * @returns {number} - Returns the max profit from buying and selling stock
 */
function maxProfit (prices) {
  let minVal = Math.max(...prices);
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    profit = Math.max(profit, prices[i] - minVal);
  }
  return profit;
}