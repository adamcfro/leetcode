/**
 * Given an array of strings words and a string s, determines if s is an
 * acronym of words. The string s is considered an acroynym of words if it can
 * be formed by concatenating the first character of each string in words in
 * order.
 * 
 * Returns true if s is an acronym of words.
 * 
 * @param {string[]} words - An array of strings of lowercase English letters
 * @param {string} s - A string of lowercase English letters
 * @returns {boolean} - Returns true if s is an acronym of words
 */
function isAcronym (words, s) {
  let concatWord = '';
  for (let i = 0; i < words.length; i++) {
    concatWord += words[i][0];
  }
  return concatWord === s;
}