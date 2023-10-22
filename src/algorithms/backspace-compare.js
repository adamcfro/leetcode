/**
 * Given two strings s and t, return true if they are equal when both are typed
 * into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * @format
 * @param {string} s - A string of lowercase letters and "#" characters
 * @param {string} t - A string of lowercase letters and "#" characters
 * @returns {boolean} - Returns true if s and t are equal
 */
function backspaceCompare(s, t) {
  return formatText(s) === formatText(t);
}

/**
 * Takes in a string and reformats the string by removing "#" characters and
 * the first character to the left of any such character. Returns the reformated
 * string.
 *
 * @param {string} str - A string of lowercase letters and "#" characters
 * @returns {string} - Returns a reformatted string
 */
function formatText(str) {
  const stack = [];
  for (const char of str) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
