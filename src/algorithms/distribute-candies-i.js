/**
 * Given two positive integers n and limit, returns the total number of ways to
 * distribute n candies among 3 children such that no child gets more than limit
 * candies.
 *
 * @format
 * @param {number} n - A number representing total candies
 * @param {number} limit - The max number of candies each child can have
 * @returns {number} - Returns the total number of ways to distribute candies
 */

function distributeCandies(n, limit) {
  let count = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      for (let k = 0; k <= limit; k++) {
        if (i + j + k === n) {
          count++;
        }
      }
    }
  }
  return count;
}
