/**
 * Given a string s and a character c that occurs in s, return an array of
 * integers answer where answer.length == s.length and answer[i] is the
 * distance from index i to the closest occurrence of character c in s.
 *
 * The distance between two indices i and j is abs(i - j), where abs is the
 * absolute value function.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @param {string} c - A lowercase English letter
 * @returns {number[]} - Returns an array of numbers with distances to the
 *     closest occurrence of c
 */

function shortestToChar(s, c) {
  let res = [];
  let prev = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prev = i;
    }
    res.push(i - prev);
  }
  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    res[i] = Math.min(res[i], prev - i);
  }
  return res;
}
