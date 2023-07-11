/**
 * There are two special characters:
 *   • The first character can be represented by one bit 0.
 *   • The second character can be represented by two bits (10 or 11).
 * Given a binary array bits that ends with 0, returns true if the last
 * character must be a one-bit character.
 * 
 * @param {number[]} bits - An array of 0's and 1's
 * @returns {boolean} - Returns true if the last character must be one-bit
 */
function isOneBitCharacter (bits) {
  let stack = [];
  let ones = 0;
  for (const bit of bits) {
    if (ones > 0) {
      ones--;
    } else if (bit === 0) {
      stack.push(0);
    } else {
      stack.push(1);
      ones = 1;
    }
  }
  return stack[stack.length - 1] === 0;
}