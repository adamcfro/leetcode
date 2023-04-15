/**
 * Given an integer parameter num, reverses the integer to get reversed1, then
 * reverses reversed1 to get reversed2. Returns true if reversed2 equals num.
 * 
 * @param {number} num - A number equal than or greater than 0
 * @returns {boolean} - Returns true if num doubly reversed is still the same
 */
function doubleReversal (num) {
  let rev = Number(String(num).split('').reverse().join(''));
  rev = Number(String(rev).split('').reverse().join(''));
  return num === rev;
}