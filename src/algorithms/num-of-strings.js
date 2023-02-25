/**
 * Returns the number of strings in patterns that exist as a substring in word.
 * 
 * @param {string[]} patterns - An array of strings made up of lowercase 
 *     English letters
 * @param {string} word - A string of lowercase English letters
 * @returns {number} - Returns a count of strings in patterns that are 
 *     substrings in word
 */
function numOfStrings (patterns, word) {
  let count = 0;
  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      count++;
    }
  }
  return count;
}