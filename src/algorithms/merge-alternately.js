/**
 * Given two strings, merges the strings by adding letters in alternating order,
 * starting with word1. If a string is longer than the other, appends the
 * additional letters onto the end of the merged string. Returns the new string.
 * 
 * @param {string} word1 - First string of lowercase English letters
 * @param {string} word2 - Second string of lowercase English letters
 * @returns {string} - Returns a newly merged string
 */
function mergeAlternately (word1, word2) {
  let res = '';
  let i = 0;
  let j = 0;
  while (i < word1.length || j < word2.length) {
    if (word1[i] !== undefined) {
      res += word1[i];
    }
    if (word2[j] !== undefined) {
      res += word2[j];
    }
    i++;
    j++;
  }
  return res;
}