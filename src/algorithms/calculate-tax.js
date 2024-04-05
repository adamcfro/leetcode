/**
 * You are given a 0-indexed 2D integer array brackets where brackets[i] =
 * [upperi, percenti] means that the ith tax bracket has an upper bound of
 * upperi and is taxed at a rate of percenti. The brackets are sorted by upper
 * bound (i.e. upperi-1 < upperi for 0 < i < brackets.length). Tax is
 * calculated as follows:
 *   • The first upper0 dollars earned are taxed at a rate of percent0.
 *   • The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
 *   • The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
 *   • And so on.
 * You are given an integer income representing the amount of money you earned.
 * Return the amount of money that you have to pay in taxes.
 *
 * @format
 * @param {number[][]} brackets - A 2D array of numbers
 * @param {number} income - A number representing income
 * @returns {number} - Returns the amount of money paid in taxes
 */

function calculateTax(brackets, income) {
  let taxes = 0;
  let prev = 0;
  for (let i = 0; i < brackets.length; i++) {
    let money = Math.min(brackets[i][0], income);
    let moneyEarned = money - prev;
    taxes += (moneyEarned / 100) * brackets[i][1];
    prev = money;
  }
  return taxes;
}
