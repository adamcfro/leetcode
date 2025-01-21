/**
 * Given a string s containing only digits, return the lexicographically
 * smallest string that can be obtained after swapping adjacent digits in s
 * with the same parity at most once.
 *
 * Digits have the same parity if both are odd or both are even. For example, 5
 * and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.
 *
 * @format
 * @param {string} s - A string of digits.
 * @returns {string} - Returns a modified string of digits.
 */

function getSmallestString(s) {
  s = s.split("");
  for (let i = 0; i < s.length - 1; i++) {
    if (
      (s[i] % 2 === 0 && s[i + 1] % 2 === 0) ||
      (s[i] % 2 === 1 && s[i + 1] % 2 === 1)
    ) {
      if (s[i] > s[i + 1]) {
        [s[i], s[i + 1]] = [s[i + 1], s[i]];
        break;
      }
    }
  }
  return s.join("");
}
