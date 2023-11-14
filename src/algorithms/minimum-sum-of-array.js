/**
 * Given two integers, n and k, where an array of distinct positive integers is
 * called a k-avoiding array if there does not exist any pair of distinct
 * elements that sum to k, returns the minimum possible sum of a k-avoiding
 * array of length n.
 *
 * @format
 * @param {number} n - The length of an array
 * @param {number} k - A target number
 * @returns {number} - Returns the minimum possible sum of a k-avoiding array
 */

function minimumSum(n, k) {
  const set = new Set();
  let res = 0;
  for (let i = 1; set.size < n; i++) {
    if (!set.has(k - i)) {
      set.add(i);
      res += i;
    }
  }
  return res;
}
