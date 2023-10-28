/**
 * Given a string s, reverses the string according to the following rules:
 *   • All the characters that are not English letters remain in the same
 *     position.
 *   • All the English letters (lowercase or uppercase) should be reversed.
 * Returns s after reversing it.
 *
 * @format
 * @param {string} s - A string of characters with ASCII values in the range
 *     [33, 122]
 * @returns {string} - Returns the resulting string after reversing s
 */
function reverseOnlyLetters(s) {
  let res = "";
  const stack = [];
  for (const char of s) {
    if (charIsLetter(char)) {
      stack.push(char);
    }
  }
  for (const char of s) {
    res += charIsLetter(char) ? stack.pop() : char;
  }
  return res;
}

/**
 * A function that returns true if char is in the ASCII range [33, 122]
 *
 * @param {string} char - An ASCII character in the range [33, 122]
 * @returns {boolean} - Returns true if char is in the ASCII range [33, 122]
 */
function charIsLetter(char) {
  return /[a-zA-Z]/.test(char);
}
