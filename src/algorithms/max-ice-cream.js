/**
 * There are n ice cream bars in an array costs, where costs[i] is the price 
 * of the ith ice cream bar. Returns the max number of ice cream bars that can
 * be bought with coins.
 * 
 * @param {number[]} costs - An array of numbers representing costs of ice cream
 * @param {number} coins - A number representing money in coins
 * @returns {number} - Returns a count of how many ice cream bars can be bought
 */
function maxIceCream (costs, coins) {
  let count = 0;
  costs.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < costs.length; i++) {
    if (coins - costs[i] < 0) {
      break;
    } else {
      count++;
      coins -= costs[i];
    }
  }
  return count;
}