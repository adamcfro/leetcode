/**
 * Given a string which contains stars (*), in one operation chooses a star and 
 * removes the star as well as the closest non-star character to its left.
 * Returns the string after all stars have been removed.
 * 
 * @param {string} s - A string of lowercase English letters and stars (*)
 * @returns {string} - Returns a modified string
 */
function removeStars (s) {
  let stack = [];
  for (const char of s) {
    if (char !== '*') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}