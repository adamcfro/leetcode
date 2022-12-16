/**
 * Given a sentence that consists of some words separated by a single space,
 * as well as a searchWord, returns the index (1-indexed) of the first word
 * that searchWord is a prefix of, or returns -1 if no such word exists.
 * 
 * @param {string} sentence - A string parameter made up of English words
 * @param {string} searchWord - A string of English characters
 * @returns {number} - Returns the index of the first matching word that
 *     searchWord is a prefix of (1-indexed)
 */
function isPrefixOfWord (sentence, searchWord) {
  let res;
  sentence = sentence.split(' ');
  for (const word of sentence) {
    if (word.slice(0, searchWord.length) === searchWord) {
      res = sentence.indexOf(word) + 1;
      break;
    }
    res = -1;
  }
  return res;
}