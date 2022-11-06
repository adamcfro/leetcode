/**
 * Given an array of characters s, reverses that array and returns it.
 * 
 * The input array is modified in place.
 * 
 * @param {string[]} s - An array of string characters
 * @returns {string[]} - Returns the array reversed
 */
function reverseString (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
}