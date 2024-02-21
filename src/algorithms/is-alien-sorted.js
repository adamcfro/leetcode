/**
 * In an alien language, surprisingly, they also use English lowercase letters,
 * but possibly in a different order. The order of the alphabet is some
 * permutation of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of
 * the alphabet, returns true if and only if the given words are sorted
 * lexicographically in this alien language.
 *
 * @format
 * @param {string[]} words - An array of strings of lowercase English letters
 * @param {string} order - A random arrangement of every lowercase English
 *     letter
 * @returns {boolean} - Returns true if words are sorted lexicographically in
 *     the alien language
 */

function isAlienSorted(words, order) {
  let indices = {};
  for (let i = 0; i < order.length; i++) {
    indices[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const char1 = indices[words[i][j]];
      const char2 = indices[words[i + 1][j]];
      if (char1 > char2 || char2 === undefined) {
        return false;
      } else if (char1 < char2) {
        break;
      }
    }
  }
  return true;
}
