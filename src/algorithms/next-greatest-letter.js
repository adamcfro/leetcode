/**
 * Given an array of letters that is sorted in increasing order, and a character
 * target, returns the smallest character in letters that is lexicographically
 * greater than target. If no such character exists, returns the first character
 * in letters.
 * 
 * @param {string[]} letters - An array of lowercase English letters
 * @param {string} target - A lowercase English letter
 * @returns {string} - Returns a lowercase English letter
 */
function nextGreatestLetter (letters, target) {
  for (const char of letters) {
    if (char > target) {
      return char;
    }
  }
  return letters[0];
}