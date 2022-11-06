/**
 * Given an integer n, returns an array containing n unique integers
 * such that they add up to 0.
 * 
 * @param {number} n - A positive whole number
 * @returns {number[]} - Returns an array of size n of unique numbers
 */
function sumZero (n) {
  let arr = [];
  const mid = Math.floor(n / 2);
  for (let i = -mid; i < mid + 1; i++) {
    if (i === 0) {
      if (n % 2 !== 1) {
        continue;
      }
    }
    arr.push(i);
  }
  return arr;
}