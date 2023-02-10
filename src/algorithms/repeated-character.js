/**
 * Returns the first letter from the string parameter s that appears twice.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {string} - Returns the first string character that appears twice
 */
function repeatedCharacter (s) {
  let chars = new Set();
  for (const char of s) {
    if (chars.has(char)) {
      return char;
    } else {
      chars.add(char);
    }
  }
}