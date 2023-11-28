/**
 * Given an array of strings words and a character x, returns an array of
 * indices representing the words that contain the character x.
 *
 * @format
 * @param {string[]} words - A array of strings made up of lowercase English
 *     letters
 * @param {string} x - A lowercase English letter
 * @returns {number[]} - Returns an array of indices where x appears in a word
 */

function findWordsContaining(words, x) {
  let indices = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].charAt(j) === x) {
        indices.push(i);
        break;
      }
    }
  }
  return indices;
}
