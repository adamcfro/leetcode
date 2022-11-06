/**
 * Given a string s and a character letter, returns the percentage of characters
 * in s that equal letter rounded down to the nearest whole percent.
 * 
 * @param {string} s - A string of characters
 * @param {string} letter - A string character
 * @returns {number} - Returns the percentage of chars in s that equal letter
 */
function percentageLetter (s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count ++;
    }
  }
  return Math.floor((count / s.length) * 100);
}