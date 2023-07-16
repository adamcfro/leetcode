/**
 * This function takes an integer array prices, representing the prices of 
 * various chocolates in a store, and a single integer money, which represents 
 * an initial amount of money.
 * 
 * Exactly two chocolates must be purchased in such a way that there is 
 * non-negative leftover money and the prices are minimized.
 * 
 * Returns the amount of money leftover after buying the two chocolates. If 
 * there is no way to buy two chocolates without ending up in debt, returns 
 * the original starting money.
 * 
 * @param {number[]} prices - An array of numbers representing prices
 * @param {number} money - A number representing an initial amount of money
 * @returns {number} - Returns the leftover money after buying two chocolates
 */
function buyChoco (prices, money) {
  prices.sort((a, b) => {
    return a - b;
  });
  let minPrice = money - prices[0] - prices[1];
  if (minPrice >= 0) {
    return minPrice;
  } else {
    return money;
  }
}