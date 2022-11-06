/**
 * Given an m by n integer grid accounts, where accounts[i] represents
 * an individual customer, and accounts[i][j] is the money that customer
 * has in a certain bank account, returns the wealth that the richest
 * customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank
 * accounts.
 * 
 * @param {number[][]} accounts - An array of number arrays
 * @returns {number} - Returns the highest sum from the array of arrays
 */
function maximumWealth (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }
  return maxWealth;
}