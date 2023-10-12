/**
 * Given two positive integers n and k, finds all factors of n,  and returns 
 * the kth factor in the sorted list. If n has less than k factors, returns -1.
 * 
 * @param {number} n - A number parameter
 * @param {number} k - A number representing the kth factor of n
 * @returns {number} - Returns the kth factor of n, or -1
 */
function kthFactor (n, k) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length >= k ? arr[k - 1] : - 1;
}