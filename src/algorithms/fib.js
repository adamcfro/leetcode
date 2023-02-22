/**
 * The Fibonacci numbers form a sequence, such that each number is the sum of 
 * the two preceding ones, starting from 0 and 1. That is:
 *     • F(0) = 0, F(1) = 1
 *     • F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculates F(n).
 * 
 * @param {number} n - The nth number of the Fibonacci sequence
 * @returns {number} - Returns the nth number
 */
function fib (n) {
  if (n <= 1) {
    return n;
  }
  let res = 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
}