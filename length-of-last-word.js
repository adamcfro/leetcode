/**
 * Given a string s consisting of words and spaces, return the length of the
 * last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * @param {string} s - A string consisting of words and spaces
 * @returns {number} - Returns the length of the last word
 */
function lengthOfLastWord (s) {
  const wordList = s.split(' ').filter(Boolean);
  return wordList[wordList.length - 1].length;
}