/**
 * There are numBottles water bottles that are initially full of water, and
 * numExchange empty water bottles can be exchanged from the market with one
 * full water bottle. The operation of drinking a full water bottle turns it
 * into an empty bottle. Returns the maximum number of water bottles that can
 * be drank.
 * 
 * @param {number} numBottles - A number representing water bottles
 * @param {number} numExchange - A number representing exchange rate
 * @returns {number} - Returns a count of max water bottles that can be drunk
 */
function numWaterBottles (numBottles, numExchange) {
  let count = numBottles;
  while (numBottles >= numExchange) {
    let leftovers = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    count += numBottles;
    numBottles += leftovers;
  }
  return count;
}