/**
 * Given two non-negative integers represented as strings, returns the sum
 * of num1 and num2 as a string.
 * 
 * @param {string} num1 - First string parameter representing a number
 * @param {string} num2 - Second string parameter representing a number
 * @returns {string} - Returns the sum of num1 and num2 represented as a string
 */
function addStrings (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let res = '';
  let carry = 0;
  while (i >= 0 || j >= 0 || carry) {
    const val1 = num1[i] || 0;
    const val2 = num2[j] || 0;
    let sum = +val1 + +val2 + carry;
    carry = sum > 9 ? 1 : 0;
    res = sum % 10 + res;
    i--;
    j--;
  }
  return res;
}