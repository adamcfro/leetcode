/**
 * Given a string word, returns true if the usage of capitals is correct.
 * 
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 *     • All letters in the word are capitals ("USA").
 *     • All letters in the word are not capitals ("leetcode").
 *     • Only the first letter in this word is capital ("Google").
 * 
 * @param {string} word - A string of English letters
 * @returns {boolean} - Returns true if capitalization rules are followed
 */
function detectCapitalUse (word) {
  return word === word.toUpperCase() ||
         word === word.toLowerCase() ||
         word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}