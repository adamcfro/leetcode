/**
 * Given a string sentence containing only lowercase English letters,
 * returns true if sentence is a pangram, or false otherwise.
 * 
 * A pangram is a sentence where every letter of the English alphabet
 * appears at least once.
 * 
 * @param {string} sentence - A string consisting of lowercase English letters
 * @returns {boolean} - Returns true if sentence is a pangram, false otherwise
 */
function checkIfPangram (sentence) {
  let uniqueChars = new Set();
  for (let i = 0; i < sentence.length; i++) {
    if (!uniqueChars.has(sentence[i])) {
      uniqueChars.add(sentence[i]);
    }
  }
  return uniqueChars.size === 26;
}