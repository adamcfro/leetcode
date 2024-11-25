/**
 * You are given a string s. Removes all digits by deleting the first digit and
 * the closest non-digit character to its left repeatedly. Returns the
 * resulting string after removing all digits.
 *
 * @format
 * @param {string} s - A string of English letters and digits.
 * @returns {string} - Returns a modified string.
 */

function clearDigits(s) {
  let stack = [];
  for (char of s) {
    let temp = isLetter(char);
    if (temp === true) {
      stack.push(char);
    } else {
      if (stack.length > 0) {
        stack.pop();
      }
    }
  }
  return stack.join("");
}

/**
 * Checks if character is a letter and returns true if character is a letter.
 *
 * @param {string} char - An English letter or digit.
 * @returns {boolean} - Returns true if character is a letter.
 */
function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}
