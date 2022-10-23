/**
 * Given two string arrays word1 and word2, returns true if the two arrays
 * represent the same string, and false otherwise.
 * 
 * A string is represented by an array if the array elements concatenated
 * in order forms the string.
 * 
 * @param {string[]} word1 - First array of strings
 * @param {string[]} word2 - Second array of strings
 * @returns {boolean} - Returns true if the concatenated strings are equal
 */
function arrayStringsAreEqual (word1, word2) {
  return word1.join('') === word2.join('');
}