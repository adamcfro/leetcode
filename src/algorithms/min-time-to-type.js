/**
 * There is a special typewriter with lowercase English letters 'a' to 'z' 
 * arranged in a circle with a pointer. A character can only be typed if the 
 * pointer is pointing to that character. The pointer is initially pointing to 
 * the character 'a'.
 * 
 * Each second, you may perform one of the following operations:
 *   • Move the pointer one character counterclockwise or clockwise.
 *   • Type the character the pointer is currently on.
 * Given a string word, returns the minimum number of seconds to type out the 
 * characters in word.
 * 
 * @param {string} word - A string of lowercase English letters
 * @returns {number} - Returns the minimum number of seconds to type word
 */
function minTimeToType (word) {
  let seconds = 0;
  let previousCode = 97;
  for (let i = 0; i < word.length; i++) {
    let current = word.charCodeAt(i);
    let distance = (
      Math.min(Math.abs(current - previousCode), 
      Math.abs(Math.abs(current - previousCode) - 26))
    );
    seconds += distance + 1;
    previousCode = word.charCodeAt(i);
  }
  return seconds;
}