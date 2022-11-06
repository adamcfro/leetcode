/**
 * Given an array of strings wordsDict and two different strings that already
 * exist in the array word1 and word2, returns the shortest distance between
 * these two words in the list.
 * 
 * @param {string[]} wordsDict - An array of strings
 * @param {string} word1 - First string parameter
 * @param {string} word2 - Second string parameter
 * @returns {number} - Returns the shortest distance in the array between
 *     the two string parameters
 */
function shortestDistance (wordsDict, word1, word2) {
  const len = wordsDict.length;
  let word1Index = len;
  let word2Index = len;
  let distance = len;
  for (let i = 0; i < len; i++) {
    if (wordsDict[i] === word1) {
      word1Index = i;
      distance = Math.min(distance, Math.abs(word1Index - word2Index));
    } else if (wordsDict[i] === word2) {
      word2Index = i;
      distance = Math.min(distance, Math.abs(word1Index - word2Index));
    }
  }
  return distance;
}