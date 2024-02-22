/**
 * You are given a string s consisting of n characters which are either 'X' or
 * 'O'. A move is defined as selecting three consecutive characters of s and
 * converting them to 'O'. Note that if a move is applied to the character 'O',
 * it will stay the same.
 *
 * Return the minimum number of moves required so that all the characters of s
 * are converted to 'O'.
 *
 * @format
 * @param {string} s - A string of uppercase X's and O's
 * @returns {number} - Returns the number of moves to convert X's to O's
 */

function minimumMoves(s) {
  let moves = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "X") {
      moves++;
      i += 2;
    }
  }
  return moves;
}
