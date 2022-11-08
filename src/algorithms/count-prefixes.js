/**
 * Returns the number of strings in words that are a prefix of s.
 * 
 * A prefix of a string is a substring that occurs at the beginning of the
 * string. A substrig is a contiguous sequence of characters within a string.
 * 
 * @param {string[]} words - An array of strings
 * @param {string} s - A string parameter
 * @returns {number} - Returns a count words that are prefixes of s
 */
function countPrefixes (words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== s[j]) {
        break;
      } else if (j + 1 >= words[i].length) {
        count++;
      }
    }
  }
  return count;
}