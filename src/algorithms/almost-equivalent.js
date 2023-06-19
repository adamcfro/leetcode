/**
 * Two strings are considered almost equivalent if the difference between the
 * frequencies of each letter from 'a' to 'z' is at most 3. The frequency of
 * a letter x is the number of times it occurs in the string.
 * 
 * Given two strings each of length n, returns true if word1 and word2 are
 * almost equivalent, or false otherwise.
 * 
 * @param {string} word1 - A string of lowercase English characters
 * @param {string} word2 - A string of lowercase English characters
 * @returns {boolean} - Returns true if the two strings are almost equivalent
 */
function checkAlmostEquivalent (word1, word2) {
  let frequency = {};
  for (const char of word1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (const char of word2) {
    frequency[char] = (frequency[char] || 0) - 1;
  }
  for (const key of Object.keys(frequency)) {
    if (frequency[key] > 3 || frequency[key] < -3) {
      return false;
    }
  }
  return true;
}