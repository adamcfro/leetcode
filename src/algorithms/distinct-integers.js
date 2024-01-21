/**
 * Given a positive integer n, that is initially placed on a board, for 109
 * days, perform the following procedure:
 *   • For each number x present on the board, find all numbers 1 <= i <= n
 *     such that x % i == 1.
 *   • Then, place those numbers on the board.
 *   • Once a number is placed on the board, it will remain on it until the end.
 * Returns the number of distinct integers present on the board after 109 days
 * have elapsed.
 *
 * @format
 * @param {number} n - A starting number
 * @returns {number} - Returns the number of distinct integers on the board
 */

function distinctIntegers(n) {
  let distinct = new Set();
  while (n > 0) {
    for (let i = 1; i < n; i++) {
      if (n % i === 1) {
        distinct.add(i);
      }
    }
    n--;
  }
  return distinct.size + 1;
}
