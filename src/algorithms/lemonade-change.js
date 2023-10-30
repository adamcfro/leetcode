/**
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a
 * queue to buy from you and order one at a time (in the order specified by
 * bills). Each customer will only buy one lemonade and pay with either a $5,
 * $10, or $20 bill. You must provide the correct change to each customer so
 * that the net transaction is that the customer pays $5.
 *
 * Note that you do not have any change in hand at first.
 *
 * Given an integer array bills where bills[i] is the bill the ith customer
 * pays, return true if you can provide every customer with the correct change,
 * or false otherwise.
 *
 * @format
 * @param {number[]} bills - An array of numbers representing dollar amounts
 * @returns {boolean} - Returns true if change can be made for all customers
 */

function lemonadeChange(bills) {
  let fives = 0;
  let tens = 0;
  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      tens++;
      if (fives > 0) {
        fives--;
      } else {
        return false;
      }
    } else {
      if (fives > 0 && tens > 0) {
        fives--;
        tens--;
      } else if (fives > 2) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
