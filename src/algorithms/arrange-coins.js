/**
 * You have n coins and you want to build a staircase with these coins. The
 * staircase consists of k rows where the ith row has exactly i coins. The last
 * row of the staircase may be incomplete. Given the integer n, return the
 * number of complete rows of the staircase you will build.
 *
 * @format
 * @param {number} n - A number representing coins
 * @returns {number} - Returns the number of complete rows that can be built
 */

function arrangeCoins(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum === n) {
      return i;
    }
    if (sum >= n) {
      return i - 1;
    }
  }
}
