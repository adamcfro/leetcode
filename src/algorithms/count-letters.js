/**
 * Given a string s, returns the number of substrings that have only one 
 * distinct letter.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns a count of substrings with one distinct letter
 */
function countLetters (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    for (let j = i; j < s.length; j++) {
      if (s[j] === currentLetter) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}