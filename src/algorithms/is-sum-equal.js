/**
 * Given three strings that each consist of lowercase english letters (a-j),
 * returns true if the summation of the numerical values of firstWord and
 * secondWord equals the numerical value of targetWord.
 * 
 * The letter value of a letter is its position in the alphabet starting from 0.
 * The numerical value of some string of lowercase English letters s is the
 * concatenation of the letter calues of each letter in s, which is then
 * converted into an integer.
 * 
 * @param {string} firstWord - First string of letters
 * @param {string} secondWord - Second string of letters
 * @param {string} targetWord - Target string of letters
 * @returns {boolean} - Returns a boolean
 */
function isSumEqual (firstWord, secondWord, targetWord) {
  let word1 = '';
  let word2 = '';
  let target = '';
  const max = Math.max(firstWord.length, secondWord.length, targetWord.length);
  for (let i = 0; i < max; i++) {
    word1 += i < firstWord.length ? firstWord.charCodeAt(i) - 97 : '';
    word2 += i < secondWord.length ? secondWord.charCodeAt(i) - 97 : '';
    target += i < targetWord.length ? targetWord.charCodeAt(i) - 97 : '';
  }
  return Number(word1) + Number(word2) === Number(target);
}