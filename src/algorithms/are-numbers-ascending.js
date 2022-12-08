/**
 * Given a string s representing a sentence, checks if all numbers in s are
 * strictly increasing from left to right, and returns true if so or returns
 * false otherwise.
 * 
 * @param {string} s - A string of lowercase letters and positive numbers
 * @returns {boolean} - Returns true if all numbers are in increasing order
 */
function areNumbersAscending (s) {
  let currentNum = 0;
  s = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      if (Number(s[i]) <= currentNum) {
        return false;
      } else {
        currentNum = Number(s[i]);
      }
    }
  }
  return true;
}