/**
 * The score of a string is defined as the sum of the absolute difference
 * between the ASCII values of adjacent characters.
 *
 * Given a string s, returns the score of s.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the score of s
 */

function scoreOfString(s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return score;
}
