/**
 * Given a string sentence, returns true if it is circular, false otherwise.
 * 
 * A sentence is circular if:
 *     • The last character of a word is equal to the first character of the
 *       next word.
 *     • The last character of the last word is equal to the first character
 *       of the first word.
 * 
 * @param {string} sentence - A string of lowercase English letters 
 * @returns {boolean} - Returns true if sentence is circular
 */
function isCircularSentence (sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length - 1; i++) {
    let len = words[i].length - 1;
    if (words[i][len] !== words[i + 1][0]) {
      return false;
    }
  }
  if (sentence[0] === sentence[sentence.length - 1]) {
    return true;
  }
  return false;
}