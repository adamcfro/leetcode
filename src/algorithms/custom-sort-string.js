/**
 * Given two strings order znd s, where all the characters of order are unique
 * and were sorted in a custom order previously, permutes the characters of s
 * so that they match the order that order was sorted and returns any
 * permutation that satisfies this.
 * 
 * @param {string} order - A string sorted in a custom way
 * @param {string} s - A string of lowercase English letters
 * @returns {string} - Returns a permuted string
 */
function customSortString (order, s) {
  let res = '';
  let charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of order) {
    if (charCount.hasOwnProperty(char)) {
      res += char.repeat(charCount[char]);
      delete charCount[char];
    }
  }
  for (const [key, val] of Object.entries(charCount)) {
    res += key.repeat(val);
  }
  return res;
}