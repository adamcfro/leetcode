/**
 * Given two binary strings a and b, returns their sum as a binary string.
 * 
 * @param {string} a - First string representation of a binary number
 * @param {string} b - Second string representation of a binary number
 * @returns {string} - Returns the sum of two binary strings in string format
 */
function addBinary (a, b) {
  let res = []
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >=  0) {
    let sum = carry;
    if (i >= 0) {
      sum += a.charAt(i) - '0';
      i--;
    }
    if (j >= 0) {
      sum += b.charAt(j) - '0';
      j--;
    }
    carry = sum > 1 ? 1 : 0;
    res.push(sum % 2);
  }
  if (carry !== 0) {
    res.push(carry);
  }
  return res.reverse().join('').toString();
}