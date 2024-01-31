/**
 * Given two strings s and goal, returns true if and only if s can become goal
 * after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the rightmost
 * position. For example, if s = "abcde", then it will be "bcdea" after one
 * shift.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @param {string} goal - A string of lowercase English letters
 * @returns {boolean} - Returns true if s can become goal after some shifts
 */

function rotateString(s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) {
      return true;
    }
  }
  return false;
}
