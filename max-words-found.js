/**
 * Given an array of strings sentences, where each sentences[i] represents
 * a single sentence, returns the maximum number of words that appear in
 * a single sentence.
 * 
 * @param {string[]} sentences - An array of strings
 * @returns {number} - Returns the max number of words from a single sentence
 */
function mostWordsFound (sentences) {
  let maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    let numWords = sentences[i].split(' ');
    if (numWords.length > maxWords) {
      maxWords = numWords.length;
    }
  }
  return maxWords;
}