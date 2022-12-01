/**
 * Given an integer num, returns its complement.
 * 
 * The complement of an integer is the integer you get when you flip all the
 * 0's to 1's and all the 1's to 0's in its binary representation.
 * 
 * @param {number} num - A number parameter
 * @returns {number} - Returns a number's complement
 */
function findComplement (num) {
  let bin = String(num.toString(2));
  let res = '';
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '0') {
      res += '1';
    } else {
      res += '0';
    }
  }
  return parseInt(res, 2);
}