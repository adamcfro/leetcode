/**
 * Given an integer n, returns its complement.
 * 
 * The complement of an integer is the integer you get when you flip all the
 * 0's to 1's and all the 1's to 0's in its binary representation.
 * 
 * @param {number} n - A number parameter
 * @returns {number} - Returns the complement of the parameter number
 */
function bitwiseComplement (n) {
  let res = '';
  const bin = n.toString(2);
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      res += '0';
    } else {
      res += '1';
    }
  }
  return parseInt(res, 2);
}