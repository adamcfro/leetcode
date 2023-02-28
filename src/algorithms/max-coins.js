/**
 * Chooses three piles of coins and adds the second largest pile to a total.
 * Repeats until there are no more piles of coins.
 * Returns the maximum number of coins that you can have.
 * 
 * @param {number[]} piles - An array of numbers representing coins
 * @returns {number} - Returns a count of the max coins you can have.
 */
function maxCoins (piles) {
  let coins = 0;
  piles.sort((a, b) => {
    return a - b;
  });
  let j = piles.length - 2;
  for (let i = 0; i < j; i++) {
    coins += piles[j];
    j -= 2;
  }
  return coins;
}