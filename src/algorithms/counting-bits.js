/**
 * Given an integer n, returns an array ans of length n + 1 such that for each
 * i (0 <= i <= n), ans[i] is the number of 1's in the binary representation
 * of i.
 * 
 * @param {number} n - A whole number
 * @returns {number[]} - Returns an array of numbers
 */
function countBits (n) {
  let ans = [0];
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + i % 2;
  }
  return ans;
}