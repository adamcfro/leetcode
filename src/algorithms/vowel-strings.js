/**
 * Given an array of string words, returns the number of strings in the 
 * inclusive range [left, right] where the string starts and ends with a vowel.
 * 
 * @param {string[]} words - An array of strings
 * @param {number} left - The starting index
 * @param {number} right - The ending index
 * @returns {number} - Returns a count of words that start and end with a vowel
 */
function vowelStrings (words, left, right) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) {
      count++;
    }
  }
  return count;
}

/**
 * Returns true if the character element is a vowel, false otherwise.
 * 
 * @param {string} char - A lowercase English letter
 * @returns {boolean} - Returns true if character is a vowel
 */
function isVowel (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
}