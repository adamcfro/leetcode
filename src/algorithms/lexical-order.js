/**
 * Given an integer n, returns all the numbers in the range (1, n) sorted in
 * lexicographical order.
 * 
 * @param {number} n - A number representing the upper end of a range
 * @returns {number[]} - Returns an array sorted in lexicographical order
 */
function lexicalOrder (n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  res.sort();
  return res;
}