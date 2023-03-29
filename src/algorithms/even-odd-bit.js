/**
 * Given a positive integer n where even denotes the number of even indices in
 * the binary representation of n with value 1, and odd denotes the number of 
 * odd indices, returns an integer array answer where answer = [even, odd].
 * 
 * @param {number} n - A positive number to be converted to binary
 * @returns {number[]} - Returns an array with the number of even and odd 
 *     indices with a value of 1
 */
function evenOddBit (n) {
  let bin = n.toString(2);
  let odd = 0;
  let even = 0;
  let j = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    if (bin[i] === '1') {
      if (j % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
    j++;
  }
  return [even, odd];
}