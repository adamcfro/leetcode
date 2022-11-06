/**
 * You are given a large integer represented as an integer array digits, where each
 * digits[i] is the ith digit of the integer. The digits are ordered from
 * most significant to least significant in left-to-right order. The large
 * integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * @param {number[]} digits - An array of numbers representing a large integer
 * @return {number[]} - Returns the modified array
 */
function plusOne (digits) {
  let lastDigit = digits.length - 1;
  digits[lastDigit] += 1;
  for (let i = lastDigit; i >= 0; i--) {
    if (digits[i] <= 9) {
      break;
    } else if (digits[0] > 9) {
      digits[0] = 0;
      digits.unshift(1);
      break;
    } else {
      digits[i] = 0;
      digits[i - 1] += 1;
    }
  }
  return digits;
}