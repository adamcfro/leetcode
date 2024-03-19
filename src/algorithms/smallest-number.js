/**
 * You are given a 0-indexed string pattern of length n consisting of the
 * characters 'I' meaning increasing and 'D' meaning decreasing. A 0-indexed
 * string num of length n + 1 is created using the following conditions:
 *   • num consists of the digits '1' to '9', where each digit is used at most
 *     once.
 *   • If pattern[i] == 'I', then num[i] < num[i + 1].
 *   • If pattern[i] == 'D', then num[i] > num[i + 1].
 * Returns the lexicographically smallest possible string num that meets the
 * conditions.
 *
 * @format
 * @param {string} pattern - A string consisting of only the letters "I" and "D"
 * @returns {string} = Returns a string of numbers
 */

function smallestNumber(pattern) {
  let res = [];
  let stack = [];
  for (let i = 0; i < pattern.length + 1; i++) {
    stack.push(i + 1);
    if (pattern[i] === "I" || i === pattern.length) {
      res.push(...stack.reverse());
      stack = [];
    }
  }
  return res.join("");
}
