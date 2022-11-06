/**
 * Returns the number of consistent strings in the array words.
 * 
 * A string is consistent if all characters in the string words appear in the
 * string allowed, which consists of entirely distinct characters.
 * 
 * @param {string} allowed - A string of distinct characters
 * @param {string[]} words - An array of string characters
 * @returns {number} - Returns a count of consistent strings
 */
function countConsistentStrings (allowed, words) {
  allowed = new Set(allowed);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.has(words[i][j])) {
        break;
      }
      if (j + 1 === words[i].length) {
        count++
      }
    }
  }
  return count;
}