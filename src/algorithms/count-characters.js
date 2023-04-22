/**
 * Given an array of strings words and a string chars, returns the sum of
 * lengths of all good strings in words.
 * 
 * A string is good if it can be formed by characters from chars 
 * (each character can only be used once).
 * 
 * @param {string[]} words - An array of strings of lowercase English letters
 * @param {string} chars - A string of lowercase English letters
 * @returns {number} - Returns the sum of the lengths of good strings
 */
function countCharacters (words, chars) {
  let count = 0;
  let charCount = {};
  for (const char of chars) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < words.length; i++) {
    let tempCount = {...charCount};
    for (let j = 0; j < words[i].length; j++) {
      if (!tempCount.hasOwnProperty(words[i][j])) {
        break;
      } else {
        tempCount[words[i][j]] -= 1;
        if (tempCount[words[i][j]] === 0) {
          delete tempCount[words[i][j]];
        }
      }
      if (j + 1 === words[i].length) {
        count += words[i].length;
      }
    }
  }
  return count;
}