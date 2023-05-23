/**
 * Given a string s of zeros and ones, returns the maximum score after splitting
 * the string into two non-empty substrings. The score after splitting a string
 * is the number of zeros in the left substring plus the number of ones in the
 * right substring.
 * 
 * @param {string} s - A string of 0's and 1's
 * @returns {number} - Returns the max score after splitting the string
 */
function maxScore (s) {
  let score = 0;
  for (const num of s) {
    if (num === '1') {
      score++;
    }
  }
  let tempScore = score;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') {
      tempScore++;
    } else if (s[i] === '1') {
      tempScore--;
    }
    if (tempScore > score || i === 0) {
      score = tempScore;
    }
  }
  return score;
}