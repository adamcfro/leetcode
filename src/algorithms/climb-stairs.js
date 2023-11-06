/**
 * You are climbing a staircase where it takes n steps to reach the top. Each
 * time you can either climb 1 or 2 steps.
 *
 * Returns the number of distinct ways you can reach the top.
 *
 * @format
 * @param {number} n - A number representing stairs to climb
 * @returns {number} - Returns the number of distinct ways to reach the top
 */
function climbStairs(n) {
  if (n <= 3) {
    return n;
  }
  let left = 0;
  let right = 1;
  for (let i = 0; i < n; i++) {
    let temp = right;
    right = left + right;
    left = temp;
  }
  return right;
}
